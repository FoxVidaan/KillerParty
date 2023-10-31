import { useState } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");
  const players = [
    {
      name: "Jason",
      challenges: [{
        title: "La terreur",
        description: "Vous devez réussir à effrayer votre cible afin qu'il meurt de peur.",
        icon: "assets/peur.png",
      },
      {
        title: "Le piège",
        description: "Vous devez proposer à votre cible de l'aider pour finalement ne pas le faire.",
        icon: "assets/fou.png",
      },
      {
        title: "La musique",
        description: "Vous devez mettre une musique de film d'horreur particulièrement fort afin d'effrayer votre cible.",
        icon: "assets/musique.png",
      },
      {
        title: "Cri de terreur",
        description: "Vous devez criez dans les oreilles de votre cible.",
        icon: "assets/demon.png",
      },
      {
        title: "La psychose",
        description: "Vous ne devez plus parler pendant 2 minutes à table.",
        icon: "assets/peur.png",
      },
      {
        title: "Le shi-fu-mi",
        description: "Vous devez faire jouer votre cible à un shi-fu-mi en 9 rounds.",
        icon: "assets/jeu.png",
      },
      {
        title: "Le breuvage maudit",
        description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
        icon: "assets/poison.png",
      },
      ],
    },
    {
      name: "Freddy",
      challenges: [{
        title: "Le bide",
        description: "Vous devez demander à votre cible de raconter une blague et lui montrer qu'il n'est absolument pas drôle.",
        icon: "assets/insulte.png",
      },
      {
        title: "La préméditation",
        description: "Vous devez aider un autre tueur à réussir un défi.",
        icon: "assets/jeu.png",
      },
      {
        title: "Le pyromane",
        description: "Vous devez emprunter 3 fois un briquet à vos cibles, vous pouvez prendre 3 fois le même à différent moment.",
        icon: "assets/feu.png",
      },
      {
        title: "Le possession",
        description: "Vous devez rire fort avec un rire diabolique.",
        icon: "assets/demon.png",
      },
      {
        title: "L'observateur",
        description: "Vous devez observer le moindre fait et geste de votre cible sans lui parler pendant 1 minute.",
        icon: "assets/tueur.png",
      },
      {
        title: "Le breuvage maudit",
        description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
        icon: "assets/poison.png",
      },
      {
        title: "Le breuvage maudit",
        description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
        icon: "assets/poison.png",
      },
      ],
    },
    {
      name: "Ghostface",
      challenges: [
        {
          title: "La malediction",
          description: "Vous devez parler en latin à votre cible à voix haute afin de le maudir.",
          icon: "assets/malediction.png",
        },
        {
          title: "La noyade",
          description: "Vous devez servir à votre cible 3 verres de suite, il doit les boire.",
          icon: "assets/noyade.png",
        },
        {
          title: "La claque",
          description: "Vous devez donner une claque à votre cible. Après tout, vous voulez le tuer.",
          icon: "assets/mort.png",
        },
        {
          title: "L'incompréhension",
          description: "Vous devez appeler votre cible par un autre prénom que le sien sans vous faire reprendre.",
          icon: "assets/fou.png",
        },
        {
          title: "Mort de rage",
          description: "Vous devez critiquer l'équipe préféré de votre cible.",
          icon: "assets/fou.png",
        },
        {
          title: "La psychose",
          description: "Vous ne devez plus parler pendant 2 minutes à table.",
          icon: "assets/peur.png",
        },
        {
          title: "Le breuvage maudit",
          description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
          icon: "assets/poison.png",
        },
      ],
    },
    {
      name: "Chucky",
      challenges: [
        {
          title: "Mort de honte",
          description: "Vous devez faire chanter votre cible en lui tendant un objet en guise de micro.",
          icon: "assets/poison.png",
        },
        {
          title: "Le taré",
          description: "Vous devez chanter suffisamment fort pour que tout le monde vous regarde.",
          icon: "assets/fou.png",
        },
        {
          title: "Les fantômes",
          description: "Vous devez faire disparaître un objet de votre cible sans qu'elle ne vous voit faire.",
          icon: "assets/peur.png",
        },
        {
          title: "La réplique",
          description: "Vous devez faire prononcez à votre cible une réplique de film d'horreur.",
          icon: "assets/peur.png",
        },
        {
          title: "Les modèles",
          description: "Vous devez faire citer à votre cible le nom d'au moins 3 tueurs en série.",
          icon: "assets/tueur.png",
        },
        {
          title: "Le nettoyeur",
          description: "Vous devez revenir des toilettes avec du papier dépassant d'une poche.",
          icon: "assets/nettoyage.png",
        },
        {
          title: "Le breuvage maudit",
          description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
          icon: "assets/poison.png",
        },
        
      ],
    },
    {
      name: "Myers",
      challenges: [{
        title: "Le sirop empoisonné",
        description: "Vous allez devoir empoisonner votre cible. Pour ce faire, vous devrez lui faire boire un verre d'eau avec 3 sirops différents.",
        icon: "assets/poison.png",
      },
      {
        title: "Innondation",
        description: "Vous devez renverser sur votre cible de l'eau maudite (de l'eau pleine de votre haine suffira).",
        icon: "assets/noyade.png",
      },
      {
        title: "La violence",
        description: "Vous devez insulter votre cible sans aucune raison pendant 1 minute.",
        icon: "assets/insulte.png",
      },
      {
        title: "Le malaise",
        description: "Vous devez parler à votre cible et le contredire pendant toute la discussion.",
        icon: "assets/jeu.png",
      },
      {
        title: "Le camouflage",
        description: "Vous devez ajouter à votre déguisement un élément du décors pour vous fondre dans la masse.",
        icon: "assets/tueur",
      },
      {
        title: "Histoire d'horreur",
        description: "Vous devez raconter à votre cible deux fois la même histoire d'horreur.",
        icon: "assets/histoire.png",
      },
      {
        title: "Le breuvage maudit",
        description: "Vous devez faire boire à votre cible un verre dans lequel vous avez mélangé deux boissons différentes.",
        icon: "assets/poison.png",
      },
      ]
    }];

  const handleSubmit = () => {
    let index = 0
    for (const player of players) {
      if (player.name.toUpperCase() == playerName.toUpperCase()) {
        navigate("game", { state: players[index] })
      }
      index += 1;
    }
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <h1>Killer Party</h1>
      <p>Bienvenue dans le jeu <strong>Killer Party</strong> ! Voici les règles simples : votre objectif est de relever divers défis.
        <br /><br />Chaque défi réussi vous rapporte un point. Cependant, si un autre joueur vous surprend en train de réaliser un défi et parvient à expliquer le défi à voix haute, c'est ce joueur qui gagne un point.
        <br />
        <br />
        Si vous tentez de deviner le défi d'un autre joueur et que vous avez tord, vous ne pouvez pas réessayer pendant 15 minutes.
        <br />
        <br />
        Tous les défis peuvent être effectués à tout moment et en tout lieu.
        <br />
        <br />
        Bonne chance et que la fête commence !
      </p>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" id='playerName' onChange={handleChange} required placeholder='Enter killer name...' />

        <br /><button className='game' type="submit">Jouer</button>
      </form>
    </>
  )
}

export default App
