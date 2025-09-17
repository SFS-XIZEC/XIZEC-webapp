import { flattenAttributes } from "@/lib/utils";

export async function fetchData(url: string, authToken?: string) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postData<T>(
  url: string,
  body: Record<string, unknown>,
  authToken?: string
): Promise<T> {
  console.log(url,body)
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok)
      throw new Error(data?.error?.message || "Failed to post data");
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}
