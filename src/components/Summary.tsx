import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRightIcon, CopyIcon } from 'lucide-react'

export default function Summary() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>Pågående ärenden</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Översikt över pågående ärenden som kvartersvärdar behöver hantera.
            </CardDescription>
          </CardHeader>
          <div className="grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="font-medium">Läckande kran</div>
              <Badge variant="secondary" className="text-xs">
                Öppen
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Trasigt fönster</div>
              <Badge variant="secondary" className="text-xs">
                Öppen
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Igensatt avlopp</div>
              <Badge variant="outline" className="text-xs">
                Stängd
              </Badge>
            </div>
          </div>
        </Card>
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>Nyckeltal</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Viktiga nyckeltal för kvartersvärdar.
            </CardDescription>
          </CardHeader>
          <div className="grid grid-cols-2 gap-4 p-6">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Totala lägenheter
              </div>
              <div className="text-2xl font-bold">342</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Vakanta lägenheter
              </div>
              <div className="text-2xl font-bold">12</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Pågående ärenden
              </div>
              <div className="text-2xl font-bold">24</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Stängda ärenden
              </div>
              <div className="text-2xl font-bold">108</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:col-span-1">
        <Card
          className="overflow-hidden lg:col-span-1"
          x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Snabblänkar
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <CopyIcon className="h-3 w-3" />
                  <span className="sr-only">Kopiera Länk</span>
                </Button>
              </CardTitle>
              <CardDescription>Gå direkt till viktiga vyer</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <a
                href="#"
                className="flex items-center justify-between hover:bg-muted rounded-md p-2"
              >
                <span>Lägenheter</span>
                <ChevronRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between hover:bg-muted rounded-md p-2"
              >
                <span>Hyresgäster</span>
                <ChevronRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between hover:bg-muted rounded-md p-2"
              >
                <span>Ärenden</span>
                <ChevronRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between hover:bg-muted rounded-md p-2"
              >
                <span>Rapporter</span>
                <ChevronRightIcon className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
