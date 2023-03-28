import NextLink from "next/link";
import Image from "next/image";
import {
  OnBoardingStep,
  OnBoardingItem,
  OnBoardingModal,
  OnBoardingProvider,
} from "@/components";
import { NoSsr } from "@/components/NoSsr";

const Home = () => {
  return (
    <OnBoardingProvider>
      <div className="container mt-6 mb-6 px-6 xl:px-14 mx-auto">
        <h1 className="text-2xl font-semibold">Hello Pierre 👋</h1>
      </div>

      <div className="container mt-6 mb-6 px-6 xl:px-14 mx-auto">
        <h1 className="text-2xl mb-6 font-semibold">
          Découvre le potentiel de Minea
        </h1>

        <NoSsr>
          <ol className="bg-white shadow rounded divide-y divide-gray-200">
            <li>
              <OnBoardingItem
                title="1 - Vérifie ton email"
                description="Valide ton email afin de continuer d'utiliser Minea"
                credit={300}
                logo="/mailbox.png"
                href="https://gmail.com"
                target="_blank"
                step={OnBoardingStep.Email}
              />
            </li>
            <li>
              <OnBoardingItem
                title="2 - Regarde la vidéo"
                description="Utilise Minea avec toutes ses capacités"
                credit={50}
                logo="/video.png"
                href="https://www.youtube.com/watch?v=O6K5y2-guzg"
                target="_blank"
                step={OnBoardingStep.Video}
              />
            </li>
            <li>
              <OnBoardingItem
                title="3 - Créer une liste"
                description="Utilise les listes pour enregistrer les pépites que tu trouve sur Minea"
                credit={100}
                logo="/list.svg"
                href="/list"
                step={OnBoardingStep.List}
              />
            </li>
            <li>
              <OnBoardingItem
                title="4 - Télécharge l'extension Chrome"
                description="Tu peux analyser tous les shops en ligne directement"
                credit={100}
                logo="/extension.png"
                href="https://chrome.google.com/webstore/detail/minea/bhmikppacmlencjgbneahnamlpcpbahg"
                target="_blank"
                step={OnBoardingStep.Extension}
              />
            </li>
            <li>
              <OnBoardingItem
                title="5 - Invite un ami"
                description="Gagne des récompenses lors de chaque invitation"
                credit={10000}
                logo="/invite.png"
                href="https://gmail.com"
                target="_blank"
                step={OnBoardingStep.Invite}
              />
            </li>
          </ol>
        </NoSsr>
      </div>

      <NoSsr>
        <OnBoardingModal />
      </NoSsr>
    </OnBoardingProvider>
  );
};

export default Home;
