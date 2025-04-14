export interface Phase {
  id: number;
  title: string;
  period: string;
  focus: string;
  details: string;
  gradientFrom: string;
  gradientTo: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Foundations & Linux/Scripting",
    period: "Weeks 1-4 (Approx. Apr 14 - May 11, 2025)",
    focus: "DevOps Culture, Linux Fundamentals, Basic Networking, Bash/Python Scripting.",
    gradientFrom: "blue-500",
    gradientTo: "blue-600",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li>
              <strong>DevOps Culture & Principles:</strong> Understand CAMS (Culture, Automation, Measurement, Sharing), goals (faster releases, reliability), relation to Agile/SRE.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://www.splunk.com/en_us/blog/learn/devsecops-concepts-principles.html" target="_blank" rel="noopener noreferrer" class="modal-link">DevSecOps Principles (Splunk)</a><br>
                  </div>
          </li>
          <li>
              <strong>Linux Fundamentals:</strong> Filesystem, Users/Permissions, Processes, Essential Commands (ls, cd, grep, find, chmod, ps, etc.), Package Management (apt/yum), Basic Networking Commands (ip, ping, curl), SSH.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://www.tutorialspoint.com/unix/index.htm" target="_blank" rel="noopener noreferrer" class="modal-link">Linux/Unix Tutorial (Tutorialspoint)</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://linuxjourney.com/" target="_blank" rel="noopener noreferrer" class="modal-link">Linux Journey</a><br>
                  <span class="font-semibold">Video:</span> <a href="https://www.youtube.com/watch?v=sWbUDq4S6Y8" target="_blank" rel="noopener noreferrer" class="modal-link">Introduction to Linux – Full Course (YouTube)</a>
              </div>
          </li>
          <li>
              <strong>Basic Networking Concepts:</strong> IP Addresses (v4/v6), Subnets/CIDR, TCP/IP basics, HTTP/HTTPS, DNS resolution, Firewall concepts.
               <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://linuxjourney.com/" target="_blank" rel="noopener noreferrer" class="modal-link">Linux Journey (Networking Section)</a><br>
                  </div>
          </li>
          <li>
              <strong>Scripting:</strong> Bash scripting (variables, loops, conditionals, functions) for automation, Python basics (syntax, file I/O, requests library - optional but recommended).
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Video (Bash):</span> <a href="https://www.youtube.com/watch?v=bz0ZCUv5rYo" target="_blank" rel="noopener noreferrer" class="modal-link">Linux Full Course (includes Bash - Edureka YouTube)</a><br>
                  </div>
          </li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Phase 2: Git, Containers & CI/CD Basics",
    period: "Weeks 5-9 (Approx. May 12 - Jun 15, 2025)",
    focus: "Git Mastery, Docker (Dockerfile, Compose), CI/CD Concepts, Intro to GitHub Actions/GitLab CI/Jenkins.",
    gradientFrom: "green-500",
    gradientTo: "green-600",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li><strong>Git Mastery:</strong> Branching Strategies (Gitflow, GitHub Flow), Merging vs. Rebasing, Conflict Resolution, Good Commit Messages.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> Search for "Git branching strategies tutorial" or "Git documentation".
              </div>
          </li>
          <li><strong>Containerization (Docker):</strong> Concepts (vs. VMs), Docker Engine, Dockerfile (FROM, RUN, COPY, EXPOSE, CMD, Multi-stage builds), Image/Container Management (build, run, ps, rm), Docker Compose, Basic Docker Networking, Volumes, Container Registries (Docker Hub, ECR, etc.).
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" class="modal-link">Docker Get Started Docs</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://spacelift.io/blog/docker-tutorial" target="_blank" rel="noopener noreferrer" class="modal-link">Docker Tutorial (Spacelift)</a><br>
                  <span class="font-semibold">Video:</span> <a href="https://www.youtube.com/watch?v=pTFZFxd4hOI" target="_blank" rel="noopener noreferrer" class="modal-link">Docker Tutorial for Beginners (YouTube)</a>
              </div>
          </li>
          <li><strong>CI/CD Concepts:</strong> Continuous Integration, Continuous Delivery, Continuous Deployment, Pipeline Stages (Checkout, Build, Test, Deploy), Artifacts.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> Search for "CI/CD concepts explained" or "What is CI/CD".
              </div>
          </li>
          <li><strong>Intro to CI/CD Tools:</strong> Choose one (GitHub Actions, GitLab CI, Jenkins). Learn basic syntax (YAML), jobs/steps, triggers, environment variables, running build/test commands.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://docs.github.com/en/actions/learn-github-actions" target="_blank" rel="noopener noreferrer" class="modal-link">GitHub Actions Documentation</a>
              </div>
          </li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Phase 3: Cloud Platform Fundamentals",
    period: "Weeks 10-15 (Approx. Jun 16 - Jul 27, 2025)",
    focus: "Choose AWS/Azure/GCP. Learn Core Concepts (IAM, Compute, Storage, Basic Networking, CDN, CloudWatch/Monitor).",
    gradientFrom: "purple-500",
    gradientTo: "purple-600",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li>
              <strong>Cloud Service Models:</strong> IaaS, PaaS, SaaS, understand differences and use cases.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://aws.amazon.com/types-of-cloud-computing/" target="_blank" rel="noopener noreferrer" class="modal-link">AWS - Types of Cloud Computing</a>
              </div>
          </li>
          <li>
              <strong>Core Services:</strong> Choose one provider (AWS, Azure, or GCP) and learn:
              <ul class="list-disc pl-5 mt-1">
                  <li>Identity & Access Management (IAM)</li>
                  <li>Compute (EC2/VMs, App Services, Functions)</li>
                  <li>Storage (Object, Block, File)</li>
                  <li>Networking (VPC/VNet, Security Groups, Routing)</li>
                  <li>CDN & Edge Services</li>
                  <li>Monitoring & Logging</li>
              </ul>
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://aws.amazon.com/getting-started/fundamentals-core-concepts/" target="_blank" rel="noopener noreferrer" class="modal-link">AWS Fundamentals</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/" target="_blank" rel="noopener noreferrer" class="modal-link">Azure Setup Guide</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://cloud.google.com/docs/overview" target="_blank" rel="noopener noreferrer" class="modal-link">Google Cloud Overview</a>
              </div>
          </li>
          <li>
              <strong>Cost Management:</strong> Pricing models, cost optimization, reserved instances.
          </li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Phase 4: Infrastructure as Code (IaC) & Advanced CI/CD",
    period: "Weeks 16-20 (Approx. Jul 28 - Aug 31, 2025)",
    focus: "IaC Concepts, Terraform, Advanced Pipelines (Environments, Secrets), Deployment Strategies.",
    gradientFrom: "yellow-500",
    gradientTo: "orange-500",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li>
              <strong>IaC Concepts:</strong> Declarative vs. Imperative, State Management, Idempotence.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://developer.hashicorp.com/terraform/intro" target="_blank" rel="noopener noreferrer" class="modal-link">Introduction to Terraform</a>
              </div>
          </li>
          <li>
              <strong>Terraform:</strong> HCL Syntax, Providers, Resources, Variables, Outputs, Modules, State Management, Terraform Cloud.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://developer.hashicorp.com/terraform/tutorials" target="_blank" rel="noopener noreferrer" class="modal-link">Terraform Tutorials</a>
              </div>
          </li>
          <li>
              <strong>Advanced CI/CD:</strong> Environment Management (Dev/Test/Prod), Secrets Management, Deployment Strategies (Blue/Green, Canary).
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://martinfowler.com/articles/cd4ml.html" target="_blank" rel="noopener noreferrer" class="modal-link">Continuous Delivery Patterns</a>
              </div>
          </li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Phase 5: Container Orchestration & Monitoring",
    period: "Weeks 21-26 (Approx. Sep 1 - Oct 12, 2025)",
    focus: "Kubernetes (Concepts, kubectl, Objects), Helm, Managed K8s, Monitoring (Prometheus, Grafana), Logging (ELK/EFK).",
    gradientFrom: "red-500",
    gradientTo: "red-600",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li>
              <strong>Kubernetes Core Concepts:</strong> Clusters, Nodes, Pods, Services, Deployments, ConfigMaps, Secrets.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://kubernetes.io/docs/concepts/" target="_blank" rel="noopener noreferrer" class="modal-link">Kubernetes Concepts</a>
              </div>
          </li>
          <li>
              <strong>Kubernetes Tools:</strong> kubectl, Helm Charts, kustomize.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://helm.sh/docs/" target="_blank" rel="noopener noreferrer" class="modal-link">Helm Documentation</a>
              </div>
          </li>
          <li>
              <strong>Managed Kubernetes:</strong> EKS/AKS/GKE basics, when to use managed vs. self-hosted.
          </li>
          <li>
              <strong>Monitoring Stack:</strong> Prometheus (metrics collection), Grafana (visualization), Alerts.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://prometheus.io/docs/introduction/overview/" target="_blank" rel="noopener noreferrer" class="modal-link">Prometheus Overview</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://grafana.com/docs/grafana/latest/" target="_blank" rel="noopener noreferrer" class="modal-link">Grafana Documentation</a>
              </div>
          </li>
          <li>
              <strong>Logging:</strong> ELK/EFK Stack (Elasticsearch, Logstash/Fluentd, Kibana), Log Aggregation.
          </li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Phase 6: Security & Continuous Learning",
    period: "Weeks 27+ (Approx. Oct 13, 2025 - Ongoing)",
    focus: "DevSecOps Principles, Security Tools, Advanced Topics (Service Mesh, GitOps), Practice, Certifications.",
    gradientFrom: "teal-500",
    gradientTo: "cyan-500",
    details: `
      <ul class="list-disc pl-5 space-y-2">
          <li>
              <strong>DevSecOps Principles:</strong> Shift Left Security, Security as Code, Compliance as Code.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://snyk.io/learn/devsecops/" target="_blank" rel="noopener noreferrer" class="modal-link">DevSecOps Explained</a>
              </div>
          </li>
          <li>
              <strong>Security Tools:</strong> SAST/DAST, Container Scanning, Secret Detection, Dependency Scanning.
          </li>
          <li>
              <strong>Advanced Topics:</strong> Service Mesh (Istio/Linkerd), GitOps (ArgoCD/Flux), Infrastructure Monitoring.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://istio.io/latest/docs/concepts/what-is-istio/" target="_blank" rel="noopener noreferrer" class="modal-link">What is Istio?</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://www.gitops.tech/" target="_blank" rel="noopener noreferrer" class="modal-link">GitOps Tech</a>
              </div>
          </li>
          <li>
              <strong>Continuous Learning:</strong> Cloud Certifications (AWS/Azure/GCP), CKA/CKAD, Personal Projects.
              <div class="mt-1 pl-4">
                  <span class="font-semibold">Resource:</span> <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer" class="modal-link">AWS Certifications</a><br>
                  <span class="font-semibold">Resource:</span> <a href="https://www.cncf.io/certification/cka/" target="_blank" rel="noopener noreferrer" class="modal-link">Certified Kubernetes Administrator</a>
              </div>
          </li>
      </ul>
    `
  }
];

export default phases;
