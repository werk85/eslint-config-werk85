import cp from 'child_process'
import { prerelease } from 'semver'
import pkg from '../package.json'

const publishArgs = ['publish']
const versionPrerelease = prerelease(pkg.version)
const prereleaseLabel = versionPrerelease?.find((identifier): identifier is string => typeof identifier === 'string')

if (prereleaseLabel !== undefined) {
  publishArgs.push('--tag', prereleaseLabel)
}

console.log(`Publishing version ${pkg.version} with tag ${prereleaseLabel ?? 'latest'}`)
cp.execFileSync('npm', publishArgs, { cwd: 'dist', stdio: 'inherit' })
