$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
$(["p", "t"]).text("hello");
const tag = $( "ul li" ).addClass(function( index ) {
  return "item-" + index;
});
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data('name') + '입니다';
});


// 타입에 대한 충돌이 생길 수 있기 때문에 네임스페이스로 묶어서 사용해준다.
declare namespace Daeun {
  const a: string;
}

// Daeun.a 

interface zQuery<T> {
  text(param?: string | number | ((this: T, index: number) => string | number | boolean)): this;
  html(param: string | Document | DocumentFragment): void;
}

const $tag: zQuery<HTMLElement> = $(['p', 't']) as unknown as zQuery<HTMLElement>;
$tag.text('123')
$tag.text(123)
$tag.text(function(index) {
  console.log(this, index);
  return true;
})

$tag.text().html(document);