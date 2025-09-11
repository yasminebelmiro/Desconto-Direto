import {
  basicSchema,
  type basicFormData,
} from "../../../schemas/MerchantRegisterSchema.ts";
import Input from "../../Login/components/Input.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { MerchantCategorys } from "../../../enum/Merchantcategorys.ts";
interface BasicStepProps {
  onNext: () => void;
}
const BasicStep = ({ onNext }: BasicStepProps) => {
  const dispatch = useDispatch();
  const basicStepData = useSelector((state: RootState) => state.merchant.basic);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<basicFormData>({
    resolver: zodResolver(basicSchema),
    defaultValues: basicStepData,
  });

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) {
        toast.error(err.message);
      }
    });
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Nome da empresa"
        error={errors.nome?.message}
        {...register("nome")}
      />
      <select
        className={`bg-white text-dark-yellow placeholder:text-dark-yellow 
          w-full h-10 px-10 md:px-5 rounded-lg outline-none ${
            errors.categoria ? "border-2 border-red-500 text-red-500" : ""
          }`}
        {...register("categoria")}
      >
        {Object.values(MerchantCategorys).map((category) => (
          <option key={category} value={category}>
            {" "}
            {category}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BasicStep;
