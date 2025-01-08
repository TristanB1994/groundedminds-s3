# terraform/backend.tf
terraform {
  backend "s3" {
    bucket         = "groundedminds-terraform-state"
    key            = "dev.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.60.0"
    }
  }
}