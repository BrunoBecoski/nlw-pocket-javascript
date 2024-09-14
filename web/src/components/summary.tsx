import { CheckCircle2, Plus } from 'lucide-react'

import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">8 a 14 de Setembro</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>50%</span>
        </div>
      </div>

      <Separator />

      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Nadar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Praticar exercícios
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Me alimentar bem
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Hoje{' '}
            <span className="text-xs text-zinc-400">(8 de Setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Meditar</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Me alimentar bem</span>" às{' '}
                <span className="text-zinc-100">12:00h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Praticar exercícios</span>" às{' '}
                <span className="text-zinc-100">15:51h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Ontem{' '}
            <span className="text-xs text-zinc-400">(7 de Setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Meditar</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Me alimentar bem</span>" às{' '}
                <span className="text-zinc-100">12:00h</span>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500"/>
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Praticar exercícios</span>" às{' '}
                <span className="text-zinc-100">15:51h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}