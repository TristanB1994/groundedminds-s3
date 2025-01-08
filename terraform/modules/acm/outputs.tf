# terraform/modules/acm/outputs.tf
output "certificate_arn" {
  value = aws_acm_certificate_validation.cert_validation.certificate_arn
}

output "txt_records" {
  value = {
    for domain, record in aws_route53_record.cert_validation : domain => record.fqdn
  }
}
