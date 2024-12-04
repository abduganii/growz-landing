export async function fetchData(url: string,) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
  
      if (!res.ok) throw new Error(`Failed to fetch data from ${url}`);
      return res.json();
    } catch (error) {
      console.error("Error:", error);
      return null; // or fallback data if available
    }
  }