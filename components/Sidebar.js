import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    HeartIcon,
    PlusCircleIcon
} from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div className="text-gray-500 font-custom p-5 boder-r border-gray-900">
        <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5"/>
                <p>Accueil</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5"/>
                <p>Rechercher</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5"/>
                <p>Bibliothèque</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5"/>
                <p>Créer une playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5"/>
                <p>Titres likés</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar