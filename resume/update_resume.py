import requests

PDF_URL = "https://docs.google.com/document/d/1KxwaJJL1VckBl-8YWLlFuWE1zXrM4IGf5szrNUS4MSg/export?format=pdf"
OUTPUT_PATH = "pdf/resume.pdf"  # or "public/resume.pdf"

def download_resume():
    response = requests.get(PDF_URL)
    if response.status_code == 200:
        with open(OUTPUT_PATH, "wb") as f:
            f.write(response.content)
        print("Downloaded latest resume.")
    else:
        print(f"Failed to download resume: {response.status_code}")

if __name__ == "__main__":
    download_resume()
