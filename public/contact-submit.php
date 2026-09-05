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

if (!$valid) {
    header('Location: /contact/?status=invalid', true, 303);
    exit;
}

$recipientVariable = $audienceMap[$audience] ?? '';
$recipient = $recipientVariable !== '' ? getenv($recipientVariable) : false;
$sender = getenv('NE_CONTACT_SENDER');

if (!is_string($recipient) || !filter_var($recipient, FILTER_VALIDATE_EMAIL) || !is_string($sender) || !filter_var($sender, FILTER_VALIDATE_EMAIL)) {
    header('Location: /contact/?status=error', true, 303);
    exit;
}

function header_safe_email(string $email): string {
    return str_replace(["\r", "\n"], '', $email);
}

function escape_text(string $value): string {
    return str_replace(["\r\n", "\r"], "\n", $value);
}

function escape_html(string $value): string {
    return htmlspecialchars(escape_text($value), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$safeSender = header_safe_email($sender);
$safeReplyTo = header_safe_email($email);
$organisationLabel = $organisation !== '' ? $organisation : '-';
$safeSubject = '[New Earth] ' . $audience . ' - ' . $subject;
$textBody = "NEW EARTH CONTACT ENQUIRY\n\n"
    . "Route: {$audience}\n"
    . "Subject: {$subject}\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Organisation: {$organisationLabel}\n\n"
    . "MESSAGE\n"
    . "------------------------------------------------------------\n\n"
    . escape_text($message) . "\n";

$host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$logoUrl = preg_match('/(^|\.)new-earth\.uk$/', $host) === 1
    ? 'https://new-earth.uk/assets/00_BRAND/logos/new-earth-logo-primary-v1.png'
    : '';
$logoHtml = $logoUrl !== ''
    ? '<img src="' . $logoUrl . '" alt="New Earth" width="72" style="display:block;width:72px;height:auto;margin:0 0 12px 0;border:0;">'
    : '';

$htmlBody = '<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>New Earth contact enquiry</title></head>'
    . '<body style="margin:0;padding:0;background:#fcfaf5;color:#202522;font-family:Arial,sans-serif;line-height:1.55;">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fcfaf5;margin:0;padding:24px 0;"><tr><td align="center">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #d4dad4;">'
    . '<tr><td style="padding:28px 32px 20px;border-top:4px solid #8a6f32;">'
    . $logoHtml
    . '<div style="font-size:18px;letter-spacing:0.14em;font-weight:800;color:#17372f;">NEW EARTH</div>'
    . '<div style="margin-top:4px;font-size:11px;letter-spacing:0.18em;color:#8a6f32;">CONSCIOUS CIVILISATION</div>'
    . '</td></tr>'
    . '<tr><td style="padding:0 32px 28px;">'
    . '<h1 style="margin:0 0 20px;color:#17372f;font-size:22px;line-height:1.25;">NEW CONTACT ENQUIRY</h1>'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">'
    . '<tr><td style="padding:8px 0;color:#234f43;font-weight:700;width:150px;">Route</td><td style="padding:8px 0;">' . escape_html($audience) . '</td></tr>'
    . '<tr><td style="padding:8px 0;color:#234f43;font-weight:700;">Subject</td><td style="padding:8px 0;">' . escape_html($subject) . '</td></tr>'
    . '<tr><td style="padding:8px 0;color:#234f43;font-weight:700;">Name</td><td style="padding:8px 0;">' . escape_html($name) . '</td></tr>'
    . '<tr><td style="padding:8px 0;color:#234f43;font-weight:700;">Email</td><td style="padding:8px 0;">' . escape_html($email) . '</td></tr>'
    . '<tr><td style="padding:8px 0;color:#234f43;font-weight:700;">Organisation</td><td style="padding:8px 0;">' . escape_html($organisationLabel) . '</td></tr>'
    . '</table>'
    . '<h2 style="margin:24px 0 10px;color:#17372f;font-size:16px;letter-spacing:0.08em;">MESSAGE</h2>'
    . '<div style="white-space:pre-wrap;padding:18px;background:#eef2ee;border-left:3px solid #8a6f32;color:#202522;">' . escape_html($message) . '</div>'
    . '</td></tr></table>'
    . '</td></tr></table></body></html>';

$boundary = 'new-earth-contact-' . bin2hex(random_bytes(12));
$body = "--{$boundary}\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $textBody . "\r\n"
    . "--{$boundary}\r\n"
    . "Content-Type: text/html; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $htmlBody . "\r\n"
    . "--{$boundary}--\r\n";

$headers = "From: {$safeSender}\r\n"
    . "Reply-To: {$safeReplyTo}\r\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
$sent = mail($recipient, $safeSubject, $body, $headers);
header('Location: /contact/?status=' . ($sent ? 'success' : 'error'), true, 303);
exit;
