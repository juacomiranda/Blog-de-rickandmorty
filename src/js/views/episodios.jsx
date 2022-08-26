import React from "react";

import "../../styles/home.css";
import { CardEp} from "../component/card.jsx";
import { Navbar } from '../component/navbar.js'

export const Episodios = ()=> {
    return (
        <div className="container text-center">
        <div className="row img-card">
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/1/10-the-ric/10-the-ricklantis-mixup-s3e7brbrthis-season-3-episode-is-a-c_xuqr.1080.jpg"
                    alt="Confusión en la Ricklántida" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/9/9-the-rick/9-the-ricks-must-be-crazy-s2e6brbrever-wonder-how-rick-power_ces6.1080.jpg"
                    alt="Los Ricks deben estar locos" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/8/8-meeseeks/8-meeseeks-and-destroy-s1e5brbrthis-was-the-first-episode-th_3mav.1080.jpg"
                    alt="La misión de los Meeseeks" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/7/7-pickle-r/7-pickle-rick-s3e3brbrheres-the-episode-that-launched-a-thou_vsgp.1080.jpg"
                    alt="Rickinillo" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/6/6-rick-pot/6-rick-potion-no-9-s1e6brbrlike-all-new-shows-rick-and-morty_3zmm.1080.jpg"
                    alt="Poción de Rick nº 9" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/5/5-the-wedd/5-the-wedding-squanchers-s2e10brbrmany-of-the-best-rick-and_b7vp.1080.jpg"
                    alt="De squanch en squanch" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/4/4-mortynig/4-mortynight-run-s2e2brbrin-mortynight-run-rick-and-morty-bu_njmm.1080.jpg"
                    alt="Huída a Mortynoche" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/3/3-rixty-mi/3-rixty-minutes-s1e8brbronly-rick-and-morty-could-do-an-enti_23en.1080.jpg"
                    alt="Sesenta Rick-nutos" />
            <CardEp url="https://sm.ign.com/t/ign_es/screenshot/2/2-auto-ero/2-auto-erotic-assimilation-s2e3brbrthis-episode-boasts-one-o_tcca.1080.jpg" 
                    alt="Asimilación autoerótica"/>
        </div>
    </div>
    )

}