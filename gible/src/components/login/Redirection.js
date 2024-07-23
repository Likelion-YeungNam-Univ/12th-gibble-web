import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "@/layouts/Loading";
import loginResponseHandler from "@/api/login/loginResponseHandler";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleloginResponse = async () => {
    const result = await loginResponseHandler(dispatch, code);
    if (result.statusCode === 200) {
      setIsLoaded(true);
      navigate("/");
    } else if (result.statusCode === 510) navigate("/signup");
    else navigate("/error");
  };

  useEffect(() => {
    HandleloginResponse();
  }, []);

  return <Wrapper>{!isLoaded ? <Loading /> : <div> </div>}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Redirection;
