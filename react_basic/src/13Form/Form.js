import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  //handleSubmit(): 두개의 함수를 받는데 하나는 유효할때 실행되는 함수(필수) 하나는 유효하지 않을 때 실행되는 함수(선택)
  const onValid = data => {
    console.log("onValid", data);
  };

  const onInVaild = err => {
    console.log("onInVaild", err);
  };
  console.log("watch", watch());
  console.log("errors", errors);
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "이름은 필수 항목입니다", value: 2 },
          })}
          placeholder="name"
        />
        {errors.username?.message}
        <br></br>
        <input
          type="text"
          {...register("email", {
            required: "나이를 입력하세요",
            min: {
              message: "0이상의 숫자만 입력 가능합니다.",
              value: 0,
            },
            validate: {
              useAge: v => v.includes("0") || "0이상의 숫자만 입력 가능합니다",
            },
          })}
          placeholder="age"
        />
        {errors.email?.message}
        <br></br>
        {/* <input type="text" {...register("password")} placeholder="password" /> */}
        <br></br>
        <button type="summit">Summit</button>
      </form>
    </>
  );
}
