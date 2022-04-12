import React from 'react'
import Seo from '../components/seo'

const Color = ({ color }) => {
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]

  return (
    <div className="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
      <div className="w-20 shrink-0">
        <div className="h-10 flex flex-col justify-center">
          <div className="text-sm font-headings font-medium capitalize">
            {color}
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 grid grid-cols-10 gap-2">
        {shades.map((shade) => (
          <Swatch color={color} shade={shade} />
        ))}
      </div>
    </div>
  )
}

const Swatch = ({ color, shade }) => {
  return (
    <div className="gap-1.5">
      <div
        className={`h-10 w-full rounded border border-base-700 bg-${color}-${shade}`}
      ></div>
      <div className="px-0.5 md:flex md:justify-between md:gap-2">
        <span className="w-12">
          {shade}
          <br />
          <span className={`text-${color}-${shade}`}>Sample</span>
        </span>
      </div>
    </div>
  )
}

export default function ThemePage() {
  const title = 'Theme'
  const palette = [
    'base',
    'primary',
    'secondary',
    'tertiary',
    'intermediate',
    'accent',
    'success',
    'warning',
    'caution',
    'alert',
  ]

  return (
    <section className="page-wrapper my-8 flex flex-col items-center gap-8 w-full">
      <Seo title={title} />
      <h1 className="font-medium text-4xl font-headings leading-tight">
        {title}
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <div className="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
            <div className="w-20 shrink-0">
              <div className="h-10 flex flex-col justify-center">
                <div className="text-sm font-headings font-medium">Dark</div>
              </div>
            </div>
            <div className="min-w-0 flex-1 grid grid-cols-10 gap-2">
              <div className="gap-1.5">
                <div className="h-10 w-full rounded border border-base-700 bg-dark"></div>
                <div className="px-0.5 md:flex md:justify-between md:gap-2">
                  <span className="w-12"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
            <div className="w-20 shrink-0">
              <div className="h-10 flex flex-col justify-center">
                <div className="text-sm font-headings font-medium">Base-0</div>
              </div>
            </div>
            <div className="min-w-0 flex-1 grid grid-cols-10 gap-2">
              <div className="gap-1.5">
                <div className="h-10 w-full rounded border border-base-700 bg-base-0"></div>
                <div className="px-0.5 md:flex md:justify-between md:gap-2">
                  <span className="w-12"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {palette.map((color) => (
          <Color color={color} />
        ))}
      </div>

      <div class="hidden">
        <div>
          <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
            <div class="w-20 shrink-0">
              <div class="h-10 flex flex-col justify-center">
                <div class="dark:monochrome text-sm font-headings font-medium">
                  Dark
                </div>
              </div>
            </div>
            <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
              <div class="gap-1.5">
                <div class="h-10 w-full rounded border border-base-700 bg-dark"></div>
                <div class="px-0.5 md:flex md:justify-between md:gap-2">
                  <span class="w-12"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
            <div class="w-20 shrink-0">
              <div class="h-10 flex flex-col justify-center">
                <div class="text-sm font-headings font-medium">Base-0</div>
              </div>
            </div>
            <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
              <div class="gap-1.5">
                <div class="h-10 w-full rounded border border-base-700 bg-base-0"></div>
                <div class="px-0.5 md:flex md:justify-between md:gap-2">
                  <span class="w-12"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                base
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-base-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-base-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-base-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-base-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-base-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-base-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-base-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-base-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-base-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-base-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                primary
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-primary-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-primary-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-primary-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-primary-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-primary-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-primary-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-primary-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-primary-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-primary-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-primary-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                secondary
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-secondary-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-secondary-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-secondary-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-secondary-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-secondary-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-secondary-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-secondary-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-secondary-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-secondary-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-secondary-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                tertiary
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-tertiary-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-tertiary-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-tertiary-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-tertiary-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-tertiary-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-tertiary-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-tertiary-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-tertiary-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-tertiary-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-tertiary-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                intermediate
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-intermediate-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-intermediate-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-intermediate-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-intermediate-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-intermediate-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-intermediate-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-intermediate-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-intermediate-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-intermediate-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-intermediate-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                accent
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-accent-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-accent-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-accent-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-accent-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-accent-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-accent-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-accent-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-accent-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-accent-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-accent-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                success
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-success-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-success-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-success-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-success-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-success-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-success-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-success-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-success-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-success-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-success-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                warning
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-warning-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-warning-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-warning-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-warning-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-warning-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-warning-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-warning-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-warning-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-warning-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-warning-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                caution
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-caution-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-caution-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-caution-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-caution-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-caution-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-caution-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-caution-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-caution-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-caution-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-caution-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:gap-4 sm:flex-row text-xs">
          <div class="w-20 shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-headings font-medium capitalize">
                alert
              </div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-10 gap-2">
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-100"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  100
                  <br />
                  <span class="text-alert-100">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-200"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  200
                  <br />
                  <span class="text-alert-200">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-300"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  300
                  <br />
                  <span class="text-alert-300">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-400"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  400
                  <br />
                  <span class="text-alert-400">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-500"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  500
                  <br />
                  <span class="text-alert-500">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-600"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  600
                  <br />
                  <span class="text-alert-600">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-700"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  700
                  <br />
                  <span class="text-alert-700">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-800"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  800
                  <br />
                  <span class="text-alert-800">Sample</span>
                </span>
              </div>
            </div>
            <div class="gap-1.5">
              <div class="h-10 w-full rounded border border-base-700 bg-alert-900"></div>
              <div class="px-0.5 md:flex md:justify-between md:gap-2">
                <span class="w-12">
                  900
                  <br />
                  <span class="text-alert-900">Sample</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
