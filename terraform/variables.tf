# terraform/variables.tf
variable "aws_region" {
  description = "AWS region to deploy resources."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "The root domain name."
  type        = string
}

variable "subdomains" {
  description = "List of subdomains to create."
  type        = list(string)
  # TODO: bring back www once dev is up default     = ["www", "dev"]
  default = ["dev"]

}

variable "certificate_validation_method" {
  description = "Method to validate ACM certificates."
  type        = string
  default     = "DNS"
}
