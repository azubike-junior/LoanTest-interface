interface NavProp {
  setOpen: any
  open: boolean
}

export default function Navbar({ setOpen, open }: NavProp) {
  return (
    <>
      {!open && (
        <div className="px-8 pt-6 flex lg:hidden xl:hidden 2xl:hidden">
          <img
            src="./menu.svg"
            alt=""
            className="lg:hidden"
            onClick={() => setOpen(true)}
          />
          <img src="./cloudbank-2.svg" alt="" className="mx-auto" />
        </div>
      )}
    </>
  )
}
