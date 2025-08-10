import Button from "@/components/Button";
import React from "react";
import TargetOption from "@/components/TargetOption";

// Essa aplicação é "Velorio online" usado para gravar e permanecer memorias de pessoas que já partiram.
// A ideia é que as pessoas possam criar um "templo" para cada pessoa que partiu, onde podem adicionar fotos, vídeos, textos e outros tipos de conteúdo para celebrar a vida dessa pessoa.
// A aplicação será usada por pessoas que querem manter a memória de seus entes queridos viva,
// e por pessoas que querem compartilhar suas histórias e experiências com outras pessoas.

export default function Create() {
    return (
        <div className="flex flex-col items-center justify-between grow">
            <h2 className="text-2xl font-semibold text-center">
                Crie um templo para eternizar as memórias de quem você ama.
            </h2>
            <div className="flex flex-col items-center gap-4 mb-30">
                <p className="text-center text-lg mb-3">Para quem você quer criar um templo?</p>
                <div className="flex gap-8">
                    <TargetOption icon="user" label="Uma pessoa" value={"person"} />
                    <TargetOption icon="paw-print" label="Um pet" value={"pet"} />
                </div>
            </div>
            <Button button="primary">Criar Templo</Button>
        </div>
    );
}
