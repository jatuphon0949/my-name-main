export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: 'url("/login/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: '100%',
          maxWidth: '400px',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '15px',
        }}
      >
        <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>

        <form>
          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">อีเมลหรือชื่อผู้ใช้</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">รหัสผ่าน</label>
          </div>

          {/* Remember me */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              จำฉันไว้
            </label>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn w-100 mb-3"
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: '1px solid #dc3545',
            }}
          >
            เข้าสู่ระบบ
          </button>
        </form>

        {/* Links */}
        <div
          className="d-flex justify-content-between px-2 py-2"
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          <a href="/forgot-password" className="text-white text-decoration-none">
            ลืมรหัสผ่าน?
          </a>
          <a href="/register" className="text-white text-decoration-none">
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </div>
  );
}
