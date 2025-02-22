Grounded Minds

[![Netlify Status](https://api.netlify.com/api/v1/badges/900a24e2-2f91-4c4b-9be8-bb4c9a76aa23/deploy-status?branch=dev)](https://app.netlify.com/sites/groundedminds-dev/deploys)

Grounded Minds is a therapy-focused web application designed to provide users with resources, tools, and interactive features to support mental well-being. The project is built with modern web technologies and is containerized for ease of deployment and scalability.

Features
	•	Therapy Resources: Provides a library of curated content to assist users with mental health challenges.
	•	Responsive Design: Optimized for use across various devices.

Development Setup

Prerequisites
	•	Docker
	•	Docker Compose
	•	Basic knowledge of terminal commands.

Running the Project Locally
	1.	Clone the repository:

`git clone https://github.com/TristanB1994/groundedminds-s3.git
cd groundedminds-s3`


	2.	Start the application using Docker Compose:

`docker-compose up`


	3.	Access the application in your browser:
	•	URL: http://localhost:5173
	4.	To stop the application:

`docker-compose down`

Folder Structure
	•	.autopr/: Contains triggers and automation configurations.
	•	docker/: Docker-related scripts and configuration files.
	•	src/: Source code for the application.
	•	public/: Static assets, including images and other public-facing content.
	•	terraform/: Infrastructure as code for deployment automation.
	•	dist/: Production build files.
