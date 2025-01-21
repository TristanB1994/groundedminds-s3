# terraform/backend.tf
terraform {
  backend "s3" {
    bucket         = "groundedminds-terraform-state"
    key            = "terraform/state/groundedminds.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.60.0"
    }
  }
}