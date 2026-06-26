type ContactPayload = {
  inquiryType?: string; fullName: string; companyName?: string;
  email: string; phone: string; subject: string; message: string; source?: string;
};

type InquiryPayload = {
  inquiryType?: string; fullName: string; companyName?: string;
  email: string; phone: string; subject: string; message: string;
};

export async function submitContact(payload: ContactPayload): Promise<{ success: boolean; contactId?: string; error?: unknown }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function submitInquiry(payload: InquiryPayload): Promise<{ success: boolean; error?: unknown }> {
  const res = await fetch("/api/contact/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
