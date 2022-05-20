import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/8569519?v=4"
        aria-hidden
        alt="Picture of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Emerson Carvalho</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/brecarv"
              target="_blank"
              rel="noopener noreferrer"
            >
              brecarv
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>10</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
