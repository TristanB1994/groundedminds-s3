# terraform/modules/s3/outputs.tf
# output "bucket_website_endpoint" {
#   value = aws_s3_bucket.website_bucket.website_endpoint
# }

# output "bucket_website_endpoint" {
#   description = "The website endpoint for the S3 bucket."
#   value       = "https://${aws_s3_bucket.website_bucket.bucket}.s3-website-${var.aws_region}.amazonaws.com"
# }

# output "bucket_name" {
#   value = aws_s3_bucket.website_bucket.id
# }

output "bucket_arn" {
  value = aws_s3_bucket.website_bucket.arn
}

output "bucket_rest_endpoint" {
  value = aws_s3_bucket.website_bucket.bucket_regional_domain_name
}

output "bucket_website_endpoint" {
  value = aws_s3_bucket.website_bucket.website_domain
}

output "origin_access_identity_path" {
  value = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
}

output "bucket_name" {
  value = aws_s3_bucket.website_bucket.id
}