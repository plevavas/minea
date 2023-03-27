import NextLink from "next/link";
import Image from "next/image";
import { OnBoardingItem } from "@/components";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container px-6 xl:px-14 mx-auto flex h-16 items-center ">
          <NextLink className="block" href="/">
            <Image src="/logo.svg" alt="Minea" width="100" height="60" />
          </NextLink>
        </div>
      </header>

      <main>
        <div className="container mt-6 mb-6 px-6 xl:px-14 mx-auto">
          <h1 className="text-2xl font-semibold">Hello Pierre 👋</h1>
        </div>

        <div className="container mt-6 mb-6 px-6 xl:px-14 mx-auto">
          <h1 className="text-2xl mb-6 font-semibold">
            Découvre le potentiel de Minea
          </h1>
          <ol className="bg-white shadow divide-y divide-gray-200">
            <li>
              <OnBoardingItem
                title="1 - Vérifie ton email"
                description="Valide ton email afin de continuer d'utiliser Minea"
                credit={300}
                logo="/mailbox.png"
              />
            </li>
            <li>
              <OnBoardingItem
                title="2 - Regarde la vidéo"
                description="Utilise Minea avec toutes ses capacités"
                credit={50}
                logo="/video.png"
              />
            </li>
            <li>
              <OnBoardingItem
                title="3 - Créer une liste"
                description="Utilise les listes pour enregistrer les pépites que tu trouve sur Minea"
                credit={100}
                logo="/list.svg"
              />
            </li>
            <li>
              <OnBoardingItem
                title="4 - Télécharge l'extension Chrome"
                description="Tu peux analyser tous les shops en ligne directement"
                credit={100}
                logo="/extension.png"
              />
            </li>
            <li>
              <OnBoardingItem
                title="5 - Invite un ami"
                description="Gagne des récompenses lors de chaque invitation"
                credit={10000}
                logo="/invite.png"
              />
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}
