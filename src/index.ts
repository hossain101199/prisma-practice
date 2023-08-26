import app from "./app";

const port = process.env.PORT || 5005;

async function main() {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

main();
