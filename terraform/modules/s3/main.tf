resource "aws_s3_bucket" "website_bucket" {
  bucket = var.bucket_name  
  tags = var.tags
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }

}

resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for CloudFront distribution pointing to ${aws_s3_bucket.website_bucket.bucket_regional_domain_name}"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website_bucket.arn}/*"]

    principals {
      identifiers = ["*"]
      type        = "*"
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
