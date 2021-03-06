import { useRouter } from "next/router";
import peticion from "isomorphic-fetch";
import Container from "../../components/Container";

const User = ({ user }) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 ofsset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const res = await peticion(`https://reqres.in/api/users/${ctx.query.id}`);
  const json = await res.json();
  return { user: json.data };
};

export default User;
