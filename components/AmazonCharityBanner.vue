<template>
  <ClientOnly>
    <div
      id="amznCharityBanner"
      class="flex justify-center min-w-[310px] min-h-[256px]"
    >
      <script type="text/javascript">
        ;(function () {
          var iFrame = document.createElement('iframe')
          iFrame.style.display = 'none'
          iFrame.style.border = 'none'
          iFrame.width = 310
          iFrame.height = 256
          iFrame.setAttribute && iFrame.setAttribute('scrolling', 'no')
          iFrame.setAttribute('frameborder', '0')
          setTimeout(function () {
            var contents = iFrame.contentWindow
              ? iFrame.contentWindow
              : iFrame.contentDocument.document
              ? iFrame.contentDocument.document
              : iFrame.contentDocument
            contents.document.open()
            contents.document.write(
              decodeURIComponent(
                '%3Cdiv%20id%3D%22amznCharityBannerInner%22%3E%3Ca%20href%3D%22https%3A%2F%2Fsmile.amazon.de%2Fch%2F17-451-10947%22%20target%3D%22_blank%22%3E%3Cdiv%20class%3D%22text%22%20height%3D%22%22%3E%3Cdiv%20class%3D%22support-wrapper%22%3E%3Cdiv%20class%3D%22support%22%20style%3D%22font-size%3A%2025px%3B%20line-height%3A%2028px%3B%20margin-top%3A%201px%3B%20margin-bottom%3A%200px%3B%22%3EUnterst%C3%BCtzen%20Sie%20%3Cspan%20id%3D%22charity-name%22%20style%3D%22display%3A%20inline-block%3B%22%3EREDEZEIT%20F%C3%9CR%20DICH%20%23virtualsupporttalks%2C%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22when-shop%22%3Eindem%20Sie%20auf%20%3Cb%3Esmile.amazon.de%3C%2Fb%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22donates%22%3E%20einkaufen.%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cstyle%3E%23amznCharityBannerInner%7Bbackground-image%3Aurl(https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F03%2Fx-locale%2Fpaladin%2Fcharitycentral%2Fbanner-background-image._CB485921641_.png)%3Bwidth%3A300px%3Bheight%3A250px%3Bposition%3Arelative%7D%23amznCharityBannerInner%20a%7Bdisplay%3Ablock%3Bwidth%3A100%25%3Bheight%3A100%25%3Bposition%3Arelative%3Bcolor%3A%23000%3Btext-decoration%3Anone%7D.text%7Bposition%3Aabsolute%3Btop%3A20px%3Bleft%3A15px%3Bright%3A15px%3Bbottom%3A100px%7D.support-wrapper%7Boverflow%3Ahidden%3Bmax-height%3A86px%7D.support%7Bfont-family%3AArial%2Csans%3Bfont-weight%3A700%3Bline-height%3A28px%3Bfont-size%3A25px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.when-shop%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A15px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.donates%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A21px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D%3C%2Fstyle%3E'
              )
            )
            contents.document.close()
            iFrame.style.display = 'block'
          })
          document.getElementById('amznCharityBanner').appendChild(iFrame)
        })()
      </script>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'AmazonCharityBanner',
}
</script>
