import asyncio
import httpx

BASE_URL = "http://localhost:8000"

# 10 concurrent GET requests to "/"
async def call_root(client: httpx.AsyncClient, i: int):
    response = await client.get(f"{BASE_URL}/")
    print(f"[Root #{i}] Status: {response.status_code}, Response: {response.json()}")

# 10 concurrent POST requests to "/translate"
async def call_translate(client: httpx.AsyncClient, i: int):
    payload = {
        "query": f"Hello world {i}",
        "target_language": "French"
    }
    response = await client.post(f"{BASE_URL}/translate", json=payload)
    print(f"[Translate #{i}] Status: {response.status_code}, Response: {response.json()}")

# Entry point for concurrency
async def main():
    async with httpx.AsyncClient() as client:
        tasks = []

        # Add 10 GET and 10 POST requests
        for i in range(10):
            tasks.append(call_root(client, i))
            tasks.append(call_translate(client, i))

        # Run all 20 concurrently
        await asyncio.gather(*tasks)

# Run the script
if __name__ == "__main__":
    asyncio.run(main())
