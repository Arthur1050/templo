import Button from "@/components/Button";
import MemorialProfile from "@/components/MemorialProfile";
import Link from "next/link";

// Essa aplicação é "Velorio online" usado para gravar e permanecer memorias de pessoas que já partiram.
// A ideia é que as pessoas possam criar um "templo" para cada pessoa que partiu, onde podem adicionar fotos, vídeos, textos e outros tipos de conteúdo para celebrar a vida dessa pessoa.
// A aplicação será usada por pessoas que querem manter a memória de seus entes queridos viva,
// e por pessoas que querem compartilhar suas histórias e experiências com outras pessoas.

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-full grow">
      <h1 className="text-4xl font-bold">Templo</h1>
      <MemorialProfile/>
      <div className="flex flex-col items-center mt-8 w-full gap-3">
        <Link href="/create" className="w-full">
          <Button button="primary">Eternizar Memórias</Button>
        </Link>
        <Link href="/login" className="w-full">
          <Button button="secondary">Acessar Conta</Button>
        </Link>
      </div>
    </div>
  );
}
