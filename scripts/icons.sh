#!/bin/sh
# before you use this do chmod u+x icons.sh on the terminal


# DEFAULTS
apple_icon_prefix='apple-touch-icon' # do not add space around =
apple_icon_sizes='57,60,72,76,114,120,144,152'
favicon_prefix='favicon'
favicon_sizes='16,32,64,96,128,196'
mstile_icon_prefix='mstile'
mstile_icon_sizes='70,144,150,310'
# DEFAULTS

function print_parsed {
    echo "input:"               $input
    echo "output:"              $output
    echo "apple_icon_prefix:"   $apple_icon_prefix
    echo "apple_icon_sizes:"    $apple_icon_sizes
    echo "favicon_prefix:"      $favicon_prefix
    echo "favicon_sizes:"       $favicon_sizes
    echo "mstile_icon_prefix:"  $mstile_icon_prefix
    echo "mstile_icon_sizes:"   $mstile_icon_sizes
}

function create_icon {
    file_size=$1 # do not add space around =
    file_name=$2

    # this is the main function that does image resizing (NOTE only tested with mac)
    # TODO: v2: try this for windows https://github.com/npocmaka/batch.scripts/blob/master/hybrids/jscript/imageProcessing/scale.bat
    sips -Z ${file_size} ${file_name}
}

function create_icon_wrapper {
    input_file=$1 # do not add space around =
    output_directory=$2
    output_file_name_prefix=$3
    size=$4
    
    # TODO: check if thei s color works for linux and windows
    echo "\033[1;32m+ Creating icon ${output_file_name_prefix}-${size}x${size}.png \033[0m"
    cp ${input_file} ${output_directory}/${output_file_name_prefix}-${size}x${size}.png
    create_icon ${size} ${output_directory}/${output_file_name_prefix}-${size}x${size}.png
}


function create_icons {
    icon_prefix=$1
    icon_sizes=$2

    echo "\033[1;33m>>> Creating icons for prefix: ${icon_prefix} & sizes: ${icon_sizes} \033[0m"
    sizes=(${icon_sizes//,/ })
    for size in ${sizes[@]}
    do
        create_icon_wrapper $input $output $icon_prefix $size
    done
}


function icons {
    if [ $? != 0 ] ; then return 1 ; fi

    while [[ ${1:0:1} == - ]]; do
        [[ $1 =~ ^-h|--help ]] && {
            echo "\033[1;33mHELP MENU: \033[0m"
            cat <<-EOF
USAGE: ./$FUNCNAME.sh [OPTIONS] [TEXT]

OPTIONS
    -i                      Input image file (Supported file name format is .png)
    -o                      Output image location 
    -aip                    Apple icon prefix (default 'apple-touch-icon')
    -ais                    Apple icon sizes (default '57,60,72,76,114,120,144,152')
    -fip                    Favicon prefix (default 'favicon')
    -fis                    Favicon sizes (default '16,32,64,96,128,196')
    -mip                    Micorsoft tile icon prefix (default 'mstile')
    -mis                    Micorsoft tile icon sizes (default '70,144,150,310')

    --input-file            Same as -i
    --output-directory      Same as -o
    --apple-icon-prefix     Same as -aip
    --apple-icon-sizes      Same as -ais
    --favicon-prefix        Same as -fip
    --favicon-sizes         Same as -fis
    --mstile_icon_prefix    Same as -mip
    --mstile_icon_sizes     Same as -mis
EOF
            return;
        };

        [[ $1 == -- ]] && { shift; break; };
        [[ $1 =~ ^-i|--input$ ]] && { input="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-o|--output$ ]] && { output="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-aip|--apple-icon-prefix$ ]] && { apple_icon_prefix="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-ais|--apple-icon-sizes$ ]] && { apple_icon_sizes="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-fip|--favicon-prefix$ ]] && { favicon_prefix="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-fis|--favicon-sizes$ ]] && { favicon_sizes="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-mip|--mstile_icon_prefix$ ]] && { mstile_icon_prefix="$2"$'\n'; shift 2; continue; };
        [[ $1 =~ ^-mis|--mstile_icon_sizes$ ]] && { mstile_icon_sizes="$2"$'\n'; shift 2; continue; };

        break;
    done 

    $clear;

    echo "\033[1;33mPARSED: \033[0m"
    echo "\033[1;33m------- \033[0m"
    print_parsed
    echo ""

    echo "Recreating output directory: \033[1;33m${output} \033[0m"
    rm -rf ${output}
    mkdir ${output}

    create_icons $apple_icon_prefix $apple_icon_sizes
    create_icons $favicon_prefix $favicon_sizes
    create_icons $mstile_icon_prefix $mstile_icon_sizes
}

icons $@
echo "\033[1;33mDONE! \033[0m"
