* Edit the `neard.conf` file and replace the key `{{ page.module.name }}Version` with the correct version.
* Start Neard.

## Infos

Neard uses a portable distribution of Ruby for Windows via RubyInstaller. Since Ruby 2.4, RubyInstaller is [based on MSYS2 toolchain](https://github.com/oneclick/rubyinstaller2#rubyinstaller2). If you want to compile C based ruby gems, you will have to download and install all necessary MSYS2 build tools by typing the command `ridk install` using by the [official installer](https://github.com/oneclick/rubyinstaller2#using-the-installer-on-a-target-system).

{% include callout.html type="warning" text="Ruby is not supported on Windows XP since 2.1 version." %}