import Container from "../components/Container";
import Head from "next/head";
import peticion from "isomorphic-fetch";
import Users from "../components/Users";

const Index = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <h1>Next</h1>
      <Users users={users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await peticion("https://reqres.in/api/users");
  const json = await res.json();
  return { users: json.data };
};

export default Index;
