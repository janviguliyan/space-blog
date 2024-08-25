import Link from "next/link";

const NotFound = () => {
    return (
      <main>
        <h2>
            Page Not Found
        </h2>
        <p>Sorry the page you are looking for doesn't exist.</p>
        <Link href={'/'}>Return Home</Link>
      </main>
    );
  };
  
  export default NotFound;