"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = (e) => {
    setAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("กรุณายอมรับเงื่อนไขก่อนสมัคร");
      return;
    }
    // ทำการส่งข้อมูล หรือประมวลผลต่อ
    alert("สมัครสมาชิกเรียบร้อย!");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f8f9fa" }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded"
        style={{ width: "100%", maxWidth: "480px", background: "white" }}
      >
        <h2 className="mb-4 text-center">สมัครสมาชิก</h2>

        {/* ชื่อผู้ใช้ */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            ชื่อผู้ใช้
          </label>
          <input type="text" className="form-control" id="username" required />
        </div>

        {/* รหัสผ่าน */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            รหัสผ่าน
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            minLength={6}
          />
        </div>

        {/* คำนำหน้า */}
        <div className="mb-3">
          <label htmlFor="prefix" className="form-label">
            คำนำหน้า
          </label>
          <select className="form-select" id="prefix" required>
            <option value="">-- เลือกคำนำหน้า --</option>
            <option value="นาย">นาย</option>
            <option value="นางสาว">นางสาว</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>

        {/* ชื่อ */}
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            ชื่อ
          </label>
          <input type="text" className="form-control" id="firstname" required />
        </div>

        {/* นามสกุล */}
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            นามสกุล
          </label>
          <input type="text" className="form-control" id="lastname" required />
        </div>

        {/* ที่อยู่ */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            ที่อยู่
          </label>
          <textarea className="form-control" id="address" rows="3" required />
        </div>

        {/* เพศ */}
        <div className="mb-3">
          <label className="form-label">เพศ</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="ชาย"
                required
              />
              <label className="form-check-label" htmlFor="male">
                ชาย
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="หญิง"
              />
              <label className="form-check-label" htmlFor="female">
                หญิง
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="อื่นๆ"
              />
              <label className="form-check-label" htmlFor="other">
                อื่นๆ
              </label>
            </div>
          </div>
        </div>

        {/* วันเกิด */}
        <div className="mb-3">
          <label htmlFor="birthday" className="form-label">
            วันเกิด
          </label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            required
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* ยอมรับเงื่อนไข */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            onChange={handleCheckboxChange}
            required
          />
          <label className="form-check-label" htmlFor="terms">
            ยอมรับเงื่อนไขการใช้งาน
          </label>
        </div>

        {/* ปุ่ม Register (กรอบดำ) */}
        <div
          className="p-2"
          style={{
            border: "2px solid black",
            borderRadius: "8px",
          }}
        >
          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={!accepted}
          >
            สมัครสมาชิก
          </button>
        </div>
      </form>
    </div>
  );
}
