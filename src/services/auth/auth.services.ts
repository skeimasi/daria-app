import apiClient from "@/configs/axios/axios.interceptor";
import { FakeUserModel, ILoginBody, ILoginResponse } from "./auth.types";
import { EndPoints } from "@/configs/constants/EndPoints";

export const loginApi = async (body: ILoginBody) => {
    const r = await apiClient.post<ILoginResponse>(
        EndPoints.auth.login,
        { ...body }
    )
    return r.data;
}

export async function fakeLoginApi(body: ILoginBody): Promise<FakeUserModel> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (body.username === "admin" && body.password === "1234") {
                const user: FakeUserModel = {
                    username: body.username,
                    token: "fake-jwt-token-" + Date.now(),
                };

                localStorage.setItem("user", JSON.stringify(user));
                resolve(user);
            } else {
                reject(new Error("wrongAuthPayload"));
            }
        }, 800);
    });
}



/************************************************************************************************************* */
// export type LoginPayload = {
//   username: string;
//   password: string;
// };

// export type User = {
//   username: string;
//   token: string;
// };

// // شبیه‌سازی API login
// export async function login(payload: LoginPayload): Promise<User> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // این قسمت فقط مثال هست - در دنیای واقعی اعتبارسنجی سمت سرور انجام میشه
//       if (payload.username === "admin" && payload.password === "1234") {
//         const user: User = {
//           username: payload.username,
//           token: "fake-jwt-token-" + Date.now(),
//         };

//         // ذخیره در localStorage
//         localStorage.setItem("user", JSON.stringify(user));

//         resolve(user);
//       } else {
//         reject(new Error("نام کاربری یا رمز عبور اشتباه است"));
//       }
//     }, 800); // شبیه‌سازی تأخیر شبکه
//   });
// }

// // دریافت کاربر ذخیره‌شده
// export async function getCurrentUser(): Promise<User | null> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = localStorage.getItem("user");
//       if (data) {
//         resolve(JSON.parse(data) as User);
//       } else {
//         resolve(null);
//       }
//     }, 300);
//   });
// }

// // خروج کاربر
// export async function logout(): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       localStorage.removeItem("user");
//       resolve();
//     }, 200);
//   });
// }

/************************************************************************************************************* */