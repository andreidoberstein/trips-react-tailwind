import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados </h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Jessica White</span>
              <span className="block text-sm text-zinc-400 truncate">jessica@email.com</span>
            </div>
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Dra. Rita Cruzis</span>
              <span className="block text-sm text-zinc-400 truncate">rita@email.com</span>
            </div>
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          </div>
        </div>
        <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 w-full justify-center h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
          <UserCog className='size-5' />
          Gerenciar convidados
        </button>
      </div>
    </div>
  );
}