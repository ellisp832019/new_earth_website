<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact/?status=error', true, 303);
    exit;
}

$limits = ['name' => 100, 'email' => 254, 'organisation' => 150, 'message' => 5000];
$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$audience = trim((string) ($_POST['audience'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$organisation = trim((string) ($_POST['organisation'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$honeypot = trim((string) ($_POST['website'] ?? ''));
$started = (int) ($_POST['form_started'] ?? 0);

$audienceMap = [
    'General / New Earth' => 'NE_CONTACT_GENERAL',
    'Peter' => 'NE_CONTACT_PETER',
    'Hayley' => 'NE_CONTACT_HAYLEY',
];
$subjects = ['General enquiry', 'Collaboration', 'MicroGrow', 'Technology & systems', 'New Earth / community', 'Conscious Living', 'Media / interview', 'Other'];
$valid = $honeypot === '' && isset($audienceMap[$audience]) && in_array($subject, $subjects, true);
foreach ($limits as $field => $limit) {
    $value = $$field;
    if ($value === '' && in_array($field, ['name', 'email', 'message'], true)) $valid = false;
    if (strlen($value) > $limit) $valid = false;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $valid = false;
if ($started > 0 && ($started > (int) (microtime(true) * 1000) || (int) (microtime(true) * 1000) - $started < 2500)) $valid = false;

$recipientVariable = $audienceMap[$audience] ?? '';
$recipient = $recipientVariable !== '' ? getenv($recipientVariable) : false;
$sender = getenv('NE_CONTACT_SENDER');
if (!is_string($recipient) || !filter_var($recipient, FILTER_VALIDATE_EMAIL) || !is_string($sender) || !filter_var($sender, FILTER_VALIDATE_EMAIL)) $valid = false;

if (!$valid) {
    header('Location: /contact/?status=error', true, 303);
    exit;
}

$safeSubject = 'New Earth contact enquiry: ' . $subject;
$body = "Name: {$name}\nEmail: {$email}\nRoute: {$audience}\nOrganisation: {$organisation}\n\n{$message}";
$headers = "From: {$sender}\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";
$sent = mail($recipient, $safeSubject, $body, $headers);
header('Location: /contact/?status=' . ($sent ? 'success' : 'error'), true, 303);
exit;
