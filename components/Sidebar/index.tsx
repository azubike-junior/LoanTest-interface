import Link from 'next/link'
import { useRouter } from 'next/router'
import { classNames } from '../../helpers/classNames'

interface Props {
  icon: string
  name: string
  color?: string
  router?: any
  pathname?: string
  link: string
}

interface SidebarProp {
  open: boolean
}

type prop = {
  router: any
  pathname: string
  child: string
}

//

const Url = ({ icon, name, color, router, pathname, link }: Props) => (
  <Link
    href={link}
    className={classNames(
      router === pathname && 'bg-[#D7ECEC] rounded-lg p-2 px-3',
      'flex space-x-4 cursor-pointer',
    )}
  >
    <img src={icon} alt="" />
    <span className={`sm:text-sm text-base 2xl:text-base text-[#489494] ${color}`}>
      {name}
    </span>
  </Link>
)

export default function Sidebar({ open }: SidebarProp) {
  const router = useRouter().pathname

  return (
    <div
      className={classNames(
        open && 'fixed -left-4 sm:block md:block',
        `z-20 hidden xl:block 2xl:block lg:block top-0 fixed left-0 lg:w-[220px] 2xl:w-[250px] lg:left-0 transition-all  ease-in-out delay-150 bg-white w-[250px]  text-red-400 shadow-lg h-full`,
      )}
    >
      <div className="pt-16 flex justify-center ">
        <div className="">
          <img src="./cloudbank.svg" alt="" />

          <div className="pt-12 sm:space-y-8 space-y-60 ">
            <div className="sm:space-y-8 space-y-10">
              <Url
                icon="./home.svg"
                name="Home"
                link="/"
                pathname="/"
                router={router}
              />
              <Url
                icon="./sendmoney.svg"
                name="Send Money"
                link="/ww"
                pathname="/abb"
                router={router}
              />
              <Url
                icon="./investment.svg"
                name="Investment"
                link="/ww"
                pathname="/aa"
                router={router}
              />
              <Url
                icon="./lona.svg"
                name="Loan"
                link="/ww"
                pathname="/lls"
                router={router}
              />
              <Url icon="./cards.svg" name="Cards" link="/ww" pathname="/lls" />
              <Url
                icon="./transactss.svg"
                name="Transactions"
                link="/ww"
                pathname="/lls"
                router={router}
              />
              <Url
                icon="./marketplace.svg"
                name="Marketplace"
                link="/sss"
                pathname="/lls"
                router={router}
              />
              <Url
                icon="./settings.svg"
                name="Settings"
                link="/dmd"
                pathname="/lls"
                router={router}
              />
            </div>

            <Url
              icon="./logout.svg"
              color="text-red-600"
              name="Logout"
              link="/kmkm"
              router={router}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
