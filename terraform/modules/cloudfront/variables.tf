# terraform/modules/cloudfront/variables.tf
variable "origin_domain_name" {
  description = "The domain name of the origin (S3 bucket website endpoint)."
  type        = string
}

variable "bucket_arn" {
  description = "The ARN of the S3 bucket."
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate."
  type        = string
}

variable "aliases" {
  description = "List of CNAMEs for the CloudFront distribution."
  type        = list(string)
  default     = []
}

variable "tags" {
  description = "Tags to apply to the CloudFront distribution."
  type        = map(string)
  default     = {}
}

variable "aws_region" {
  description = "AWS region."
  type        = string
  default     = "us-east-1"
}

variable "origin_access_identity_path" {
  description = "The path to the origin access identity."
  type        = string
}