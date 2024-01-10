const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "white",
      }}
    >
      <img
        style={{
          width: "39px",
          height: "39px",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          width: "70%",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <p
            style={{
              margin: "unset",
              lineHeight: "22px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#FFF",
            }}
          >
            Name
          </p>
          <a style={{ color: "#FFF" }} href="/#">
            visit store
          </a>
        </div>
      </div>

      <div style={{ rotate: "90deg" }}>ᐳ</div>
      </div>
  );
        }
export default UserProfile;