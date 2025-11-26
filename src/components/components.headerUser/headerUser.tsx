import "./headerUser.css";

interface HeaderUserProps {
  name: string;
  avatarUrl: string;
}

export default function HeaderUser({ name, avatarUrl }: HeaderUserProps) {
  return (
    <div className="header-user">
      <img src={avatarUrl} alt="Avatar" className="header-avatar" />

      <div className="header-texts">
        <p className="header-hello">Olá,</p>
        <p className="header-name">{name}</p>
      </div>
    </div>
  );
}
