import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function Navbar() {
  const { user } = useContext(UserContext);
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setLoading(!loading);

    setTimeout(() => {
      setShowOptions(false);
      navigate("/");
      setLoading(false);
    }, 700);
  }

  return (
    <>
      {!user ? (
        ""
      ) : (
        <NavContainer data-test="header" visible={user}>
          <Link to={`/hoje`}>
            <Logo>TrackIt</Logo>
          </Link>
          <PersonalInfo>
            {showOptions ? (
              <h1 onClick={() => setShowOptions(!showOptions)}>Cancelar</h1>
            ) : (
              <>
                <ProfilePicture
                  onClick={() => setShowOptions(!showOptions)}
                  src={user.image}
                  data-test="avatar"
                />
                <h1>Olá, {user.name}!</h1>
              </>
            )}
            {showOptions && (
              <button onClick={logout} disabled={loading}>
                {loading ? (
                  <ThreeDots
                    height="26"
                    width="64"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  <span>Logout</span>
                )}
              </button>
            )}
          </PersonalInfo>
        </NavContainer>
      )}
    </>
  );
}

export default Navbar;
const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
  button {
    margin-left: 10px;
  }
  h1 {
    margin-left: 10px;
    color: #ffffff;
  }
`;
const NavContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;
  margin-left: 18px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
