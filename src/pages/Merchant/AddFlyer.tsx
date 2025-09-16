import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx"

const AddFlyer = () => {
  return (
    <div>
        <BreadcrumbBanner currentPage="Cadastro de Panfleto" typeUser="comerciantes" />
        <div>
            <div className="flex flex-col w-full h-auto">
                <input className="h-100" type="file" accept="image/*"/>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default AddFlyer