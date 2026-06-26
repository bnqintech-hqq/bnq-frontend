export async function submitApplication(formData: FormData): Promise<{ message?: string; error?: string }> {
  const res = await fetch("/api/apply", {
    method: "POST",
    body: formData,
  });
  return res.json();
}
