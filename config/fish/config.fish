
zoxide init fish | source

set fish_greeting

if status is-interactive
    fastfetch
    # Commands to run in interactive sessions can go here
end
