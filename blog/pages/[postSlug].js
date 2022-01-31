import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {console.log("hai")}
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Single Post page</h1>
        <p>Post slug: {router.query.postSlug}</p>
        <p>We can use this slug to fetch post details from server</p>
      </main>
    </div>
  );
}
