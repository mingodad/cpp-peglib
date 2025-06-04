// Setup editors
function setupInfoArea(id) {
  const e = ace.edit(id);
  e.setShowPrintMargin(false);
  e.setOptions({
    readOnly: true,
    highlightActiveLine: false,
    highlightGutterLine: false
  })
  e.renderer.$cursorLayer.element.style.opacity=0;
  return e;
}

function setupEditorArea(id, lsKey) {
  const e = ace.edit(id);
  e.setShowPrintMargin(false);
  e.setValue(localStorage.getItem(lsKey) || '');
  e.moveCursorTo(0, 0);
  return e;
}

let userContentHasChanged = false;
let grammarContentHasChanged = false;
let inputContentHasChanged = false;
function grammarOnChange(delta) {
	if(!grammarContentHasChanged) {
		grammarContentHasChanged = true;
		userContentHasChanged = true;
	}
}
function inputOnChange(delta) {
	if(!inputContentHasChanged) {
		inputContentHasChanged = true;
		userContentHasChanged = true;
	}
}

const grammarEditor = setupEditorArea("grammar-editor", "grammarText");
grammarEditor.on("change", grammarOnChange);
grammarEditor.getSession().setMode("ace/mode/yaml");
const codeEditor = setupEditorArea("code-editor", "codeText");
codeEditor.on("change", inputOnChange);
userContentHasChanged = localStorage.getItem("userContentHasChanged");

const codeAst = setupInfoArea("code-ast");
const codeAstOptimized = setupInfoArea("code-ast-optimized");
const codeProfile = setupInfoArea("code-profile");

onbeforeunload= function(event) { updateLocalStorage(); };

const sampleList = [
	//title, grammar, input, input ace syntax
	["abnf parser", "abnf-peppapeg.peglib", "test.abnf", "ace/mode/text"],
	["abstract interpreter parser", "Abstract_Interpreter.peglib", "test.Abstract_Interpreter", "ace/mode/text"],
	["antlr3 parser", "antlr3-grako.peglib", "test.antlr3", "ace/mode/yaml"],
	["antlr4 parser", "Antlr4-naked.peglib", "test.antlr4", "ace/mode/yaml"],
	["ards parser", "ards_compiler.peglib", "test.ards_compiler", "ace/mode/text"],
	["bass parser", "bass-grammar.peglib", "test.bass", "ace/mode/asm"],
	["bc calculator parser", "bc.peglib", "test.bc", "ace/mode/text"],
	["bison parser", "bison.peglib", "test.bison", "ace/mode/yaml"],
	["bnf parser", "bnf-node-ebnf.peglib", "test.bnf", "ace/mode/yaml"],
	["bython2 parser", "bython_2.peglib", "test.bython_2", "ace/mode/text"],
	["c-peg4d-java parser", "c-peg4d-java.peglib", "test.c", "ace/mode/c_cpp"],
	["c-pegged parser", "c-pegged.peglib", "test.c", "ace/mode/c_cpp"],
	["c11-lpegrex parser", "c11_lpegrex.peglib", "test.c", "ace/mode/c_cpp"],
	["c17-WG14/N1256 parser", "std_c17.peglib", "test.c", "ace/mode/c_cpp"],
	["c17-WG14/N1256-prec parser", "std_c17-prec.peglib", "test.c", "ace/mode/c_cpp"],
	["c++-23 parser", "c++23.peglib", "test.c", "ace/mode/c_cpp"],
	["c99-mouse parser", "c99-mouse-dict.peglib", "test.c", "ace/mode/c_cpp"],
	["cinamon parser", "cinamon.peglib", "test.cinamon", "ace/mode/text"],
	["clunc parser", "clunc.peglib", "test.clunc", "ace/mode/c_cpp"],
	["com parser", "com-parser-grammar.peglib", "test.com-parser-grammar", "ace/mode/c_cpp"],
	["corset-lisp parser", "corset.peglib", "test.corset", "ace/mode/lisp"],
	["CSharp parser", "CSharp-nemerle.peglib", "test.cs", "ace/mode/csharp"],
	["Css parser", "css.peglib", "../style.css", "ace/mode/css"],
	//["Css parser", "CssParser.peglib", "style.css", "ace/mode/css"],
	//["exprtk parser", "exprtk.peglib", "test.exprtk", "ace/mode/c_cpp"],
	["CAN bus parser", "dbc_grammar.peglib", "test.dbc_grammar", "ace/mode/text"],
	["culebra parser", "culebra.peglib", "test.culebra", "ace/mode/text"],
	["curl parser", "curl-parser.peglib", "test.curl-parser", "ace/mode/text"],
	["D parser", "d-pegged.peglib", "test.d-pegged", "ace/mode/d"],
	["dafny-lang parser", "dafny-lang.peglib", "test.dafny-lang", "ace/mode/text"],
	["DAGOperator parser", "DAGOperator.peglib", "test.DAGOperator", "ace/mode/text"],
	["dot parser", "dot-obermann.peglib", "test.dot-obermann", "ace/mode/text"],
	["egg parser", "egg-bruceiv.peglib", "test.egg-bruceiv", "ace/mode/text"],
	["enterprise parser", "enterprise.peglib", "test.enterprise", "ace/mode/text"],
	["esdl parser", "esdl-thalo-rs.peglib", "test.esdl-thalo-rs", "ace/mode/text"],
	["expr parser", "expr-rs.peglib", "test.expr-rs", "ace/mode/text"],
	["feaparser parser", "feaparser.peglib", "test.feaparser", "ace/mode/text"],
	["filter string parser", "filter_string.peglib", "test.filter_string", "ace/mode/text"],
	["formula_ast parser", "formula_ast.peglib", "test.formula_ast", "ace/mode/text"],
	["flatzinc parser", "flatzinc_parser.peglib", "test.flatzinc_parser", "ace/mode/text"],
	["fluenc parser", "fluenc.peglib", "test.fluenc", "ace/mode/text"],
	["fluid-fltk parser", "fluid.peglib", "test.fluid", "ace/mode/text"],
	["gams parser", "gams.peglib", "test.gams", "ace/mode/text"],
	["gmpl parser", "gmpl.peglib", "test.gmpl", "ace/mode/text"],
	["gnparser parser", "gnparser.peglib", "test.gnparser", "ace/mode/text"],
	["golang parser", "golang.peglib", "test.golang", "ace/mode/go"],
	["golang-peppapeg parser", "golang-v1.17-peppapeg.peglib", "test.golang", "ace/mode/go"],
	["hcl2 parser", "hcl2-peppapeg.peglib", "test.hcl2", "ace/mode/text"],
	["Hera parser", "Hera.peglib", "test.Hera", "ace/mode/text"],
	["hl parser", "hl-pamburus.peglib", "test.hl-pamburus", "ace/mode/text"],
	["html-coal parser", "rust-coal.peglib", "test.rust-coal", "ace/mode/html"],
	["html-kale parser", "html-kale.peglib", "test.html-kale", "ace/mode/html"],
	["http parser", "http-pest.peglib", "test.http", "ace/mode/text"],
	["httpql parser", "httpql.peglib", "test.httpql", "ace/mode/text"],
	["ini parser", "one-ini.peglib", "test.one-ini", "ace/mode/text"],
	["janet-lang parser", "janet-lang.peglib", "test.janet-lang", "ace/mode/lisp"],
	["jasmine parser", "jasmine.peglib", "test.jasmine", "ace/mode/text"],
	["Java8 parser", "java8-nez.peglib", "test.java", "ace/mode/java"],
	["Java-mouse parser", "java-foxlabs-peg4.peglib", "test.java", "ace/mode/java"],
	["Java-18-mouse parser", "Java.18-nlr.peglib", "test.java", "ace/mode/java"],
	["Javascript peggy parser (be patient too slow)", "javascript-peggy.peglib", "test.js", "ace/mode/javascript"],
	["Javascript tolmasky parser", "javascript-tolmasky.peglib", "test.js", "ace/mode/javascript"],
	["Json parser", "json-peppapeg.peglib", "test.json.txt", "ace/mode/json"],
	["Json5 parser", "json5-dpranke.peglib", "test.json5", "ace/mode/json"],
	["JsonPath parser", "JsonPath.peglib", "test.JsonPath", "ace/mode/text"],
	["Jlang parser", "jlang.peglib", "test.jlang", "ace/mode/text"],
	["kotlin parser", "kotlin-perf.peglib", "test.kotlin", "ace/mode/text"],
	["lalrpop parser", "lalrpop.peglib", "test.lalrpop", "ace/mode/text"],
	["llvm-ir parser", "rockpiler.peglib", "test.rockpiler", "ace/mode/c_cpp"],
	["lua parser", "lua.peglib", "test.lua", "ace/mode/lua"],
	["lua-5.4 parser", "lua-v5.4-peppapeg.peglib", "test.lua", "ace/mode/lua"],
	["lys-lang parser", "lys-lang.peglib", "test.lys-lang", "ace/mode/text"],
	["nelua parser", "nelua.peglib", "test.nelua", "ace/mode/lua"],
	["markdown parser", "markup-aurochs.peglib", "test.markup-aurochs", "ace/mode/markdown"],
	["markdown-md-tui parser", "markdown-md-tui.peglib", "test.markdown-md-tui", "ace/mode/markdown"],
	["minitt parser", "minitt-rs.peglib", "test.minitt-rs", "ace/mode/text"],
	["nushell parser (be patient)", "nushell.peglib", "test.nushell", "ace/mode/sh"],
	["oberon2 parser", "oberon2-pegged.peglib", "test.oberon2-pegged", "ace/mode/text"],
	["oriel parser", "oriel.peglib", "test.oriel", "ace/mode/text"],
	["owl-horned parser", "owl-horned.peglib", "test.owl-horned", "ace/mode/text"],
	["peg-aurochs parser", "peg-aurochs.peglib", "test.peg-aurochs", "ace/mode/text"],
	["peg-chpeg parser", "chpeg-ext.peglib", "test.chpeg-ext", "ace/mode/yaml"],
	["peg-cloudwebrtc parser", "peg-cloudwebrtc.peglib", "test.peg-cloudwebrtc", "ace/mode/text"],
	["peg-cpp-peglib parser", "cpp-peglib.peglib", "cpp-peglib.peglib", "ace/mode/yaml"],
	["peg-glop parser", "glop-dpranke.peglib", "test.glop-dpranke", "ace/mode/text"],
	["peg-gpeg parser", "gpeg.peglib", "test.gpeg", "ace/mode/text"],
	["peg-gpeg-assembly parser", "gpeg-assembly.peglib", "test.gpeg-assembly", "ace/mode/text"],
	["peg-gpeg-transform parser", "gpeg-transform.peglib", "test.gpeg-transform", "ace/mode/text"],
	["peg-grako parser", "grako-swayf.peglib", "test.grako-swayf", "ace/mode/text"],
	["peg-ironmeta parser (be patient)", "peg-ironmeta.peglib", "test.peg-ironmeta", "ace/mode/text"],
	["peg-language parser", "language.peglib", "test.language", "ace/mode/text"],
	["peg-leg parser", "leg.peglib", "test.leg", "ace/mode/text"],
	["peg-lpegre parser", "lpegre.peglib", "test.lpegre", "ace/mode/text"],
	["peg-lpegrex parser", "lpegrex.peglib", "test.lpegrex", "ace/mode/text"],
	["peg-mouse parser", "peg-mouse.peglib", "test.peg-mouse", "ace/mode/text"],
	["peg-naigama parser", "naigama.peglib", "test.naigama", "ace/mode/text"],
	["peg-narwhal parser", "peg_bs2.peglib", "test.peg_bs2", "ace/mode/text"],
	["peg-nez parser", "nez-peg.peglib", "test.nez", "ace/mode/text"],
	["peg-nim-std parser", "peg-nim-std.peglib", "test.peg-nim-std", "ace/mode/text"],
	["peg-pacc parser", "peg-pacc.peglib", "test.peg-pacc", "ace/mode/text"],
	["peg-pegn parser", "pegn.peglib", "test.pegn", "ace/mode/text"],
	["peg-pegged parser", "pegged.peglib", "test.pegged", "ace/mode/text"],
	["peg-peggen-quarnster parser", "peggen-quarnster.peglib", "test.peggen-quarnster", "ace/mode/text"],
	["peg-peggen-py parser", "peg-peggen-py.peglib", "test.peg-peggen-py", "ace/mode/text"],
	["peg-pegkit parser", "pegkit.peglib", "test.pegkit", "ace/mode/text"],
	["peg-pegjs parser", "pegjs.peglib", "test.pegjs", "ace/mode/text"],
	["peg-peppapeg parser", "PeppaPEG.peglib", "test.PeppaPEG", "ace/mode/text"],
	["peg-pest parser", "pest.peglib", "test.pest", "ace/mode/text"],
	["peg-pigeon parser", "peg-pigeon.peglib", "test.peg-pigeon", "ace/mode/text"],
	["peg-piumarta parser", "peg-piumarta.peglib", "test.peg-piumarta", "ace/mode/text"],
	["peg-pkanz parser", "pPEG-pcanz.peglib", "test.pPEG-pcanz", "ace/mode/text"],
	["peg-pointlander parser", "peg-pointlander.peglib", "test.peg-pointlander", "ace/mode/text"],
	["peg-treetop parser", "treetop.peglib", "test.treetop", "ace/mode/text"],
	["peg-waxeye parser", "waxeye.peglib", "test.waxeye", "ace/mode/text"],
	["prometeus parser", "prometheus-parser-rs.peglib", "test.prometheus-parser-rs", "ace/mode/text"],
	["protobuf parser", "protobuf.peglib", "test.protobuf", "ace/mode/text"],
	["protobuf-protofish parser", "protofish.peglib", "test.protobuf", "ace/mode/text"],
	["pscript parser", "pscript.peglib", "test.pscript", "ace/mode/text"],
	["reelay regex parser", "reelay-regex.peglib", "test.reelay-regex", "ace/mode/text"],
	["rex-parser-generator parser", "rex-ebnf.peglib", "test.rex-ebnf", "ace/mode/text"],
	["rus parser", "rus_parser.peglib", "test.rus_parser", "ace/mode/text"],
	["scc parser", "scc.peglib", "test.scc", "ace/mode/text"],
	["sfl parser", "sfl-dmitry-vlasov.peglib", "test.sfl-dmitry-vlasov", "ace/mode/text"],
	["simfony parser", "simfony.peglib", "test.simfony", "ace/mode/text"],
	["slang parser", "slang-grammar.peglib", "test.slang-grammar", "ace/mode/text"],
	["spruce parser", "Spruce.peglib", "test.Spruce", "ace/mode/text"],
	["sql parser", "sql.peglib", "test.sql", "ace/mode/sql"],
	["sql-duckdb parser", "duckdb-autocomplete.peglib", "test.sql", "ace/mode/sql"],
	["sql-pest parser", "sql-pest.peglib", "test.sql-pest", "ace/mode/sql"],
	["sqlite-pegkit parser", "sqlite-pegkit.peglib", "test.sql", "ace/mode/sql"],
	["sqlserver parser", "sqlserver-naig.peglib", "test.sql2", "ace/mode/sql"],
	["solang parser", "solang-soasme.peglib", "test.solang-soasme", "ace/mode/java"],
	["throne parser", "throne.peglib", "test.throne", "ace/mode/text"],
	["toml-pest parser", "toml-pest.peglib", "test.toml", "ace/mode/toml"],
	["toml-peppapeg parser", "toml-peppapeg.peglib", "test.toml", "ace/mode/toml"],
	["tsv parser", "tsv.peglib", "test.tsv", "ace/mode/text"],
	["uci-vampir parser", "vampirc-uci.peglib", "test.vampirc-uci", "ace/mode/text"],
	["verona parser", "verona.peglib", "test.verona", "ace/mode/text"],
	["vhdl parser", "vhdl2008.peglib", "test.vhdl", "ace/mode/text"],
	["virgil parser", "virgil.peglib", "test.virgil", "ace/mode/c_cpp"],
	["xcml parser", "xcml-xml_spec.peglib", "test.xcml-xml_spec", "ace/mode/lisp"],
	["xkb parser", "xkb-parser.peglib", "test.xkb-parser", "ace/mode/text"],
	["xtypes parser", "xtypes.peglib", "test.xtypes", "ace/mode/c_cpp"],
	["w3cebnf parser", "w3cebnf-node-ebnf.peglib", "test.w3cebnf", "ace/mode/text"],
	["zig parser", "zig.peglib", "test.zig", "ace/mode/c_cpp"],
];

function load_example(self) {
  if(userContentHasChanged)
  {
	let ok = confirm("Your changes will be lost !\nIf the changes you've made are important save then before proceed.\nCopy and paste to your prefered editor and save it.\nEither OK or Cancel.");
	if(!ok) return false;
  }
  let base_url = "./grammars/"
  if(self.selectedIndex > 0) {
      let sample_to_use = sampleList[self.selectedIndex-1];
      $.get(base_url + sample_to_use[1], function( data ) {
        grammarEditor.setValue( data );
	grammarContentHasChanged = false;
	userContentHasChanged = false;
      });
      $.get(base_url + sample_to_use[2], function( data ) {
        codeEditor.setValue( data );
	codeEditor.getSession().setMode(sample_to_use[3]);
	inputContentHasChanged = false;
	userContentHasChanged = false;
      });
  }
}

$('#opt-mode').val(localStorage.getItem('optimizationMode') || 'all');
$('#start-rule').val(localStorage.getItem('startRule') || '');
$('#packrat').prop('checked', localStorage.getItem('packrat') === 'true');
$('#auto-refresh').prop('checked', localStorage.getItem('autoRefresh') === 'true');
$('#parse').prop('disabled', $('#auto-refresh').prop('checked'));

// Parse
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateErrorListHTML(errors) {
  let html = '<ul>';

  html += $.map(errors, function (x) {
    if (x.gln && x.gcol) {
      return `<li data-ln="${x.ln}" data-col="${x.col}" data-gln="${x.gln}" data-gcol="${x.gcol}"><span>${x.ln}:${x.col}</span> <span>${escapeHtml(x.msg)}</span></li>`;
    } else {
      return `<li data-ln="${x.ln}" data-col="${x.col}"><span>${x.ln}:${x.col}</span> <span>${escapeHtml(x.msg)}</span></li>`;
    }
  }).join('');

  html += '<ul>';

  return html;
}

function updateLocalStorage() {
  if(grammarContentHasChanged || inputContentHasChanged)
  {
    localStorage.setItem('grammarText', grammarEditor.getValue());
    localStorage.setItem('codeText', codeEditor.getValue());
    grammarContentHasChanged = false;
    inputContentHasChanged = false;
    localStorage.setItem('optimizationMode', $('#opt-mode').val());
    localStorage.setItem('startRule', $('#start-rule').val());
    localStorage.setItem('packrat', $('#packrat').prop('checked'));
    localStorage.setItem('autoRefresh', $('#auto-refresh').prop('checked'));
  }
}

var parse_start_time = 0;

function parse() {
  const $grammarValidation = $('#grammar-validation');
  const $grammarInfo = $('#grammar-info');
  const grammarText = grammarEditor.getValue();

  const $codeValidation = $('#code-validation');
  const $codeInfo = $('#code-info');
  const codeText = codeEditor.getValue();

  const optimizationMode = $('#opt-mode').val();
  const startRule = $('#start-rule').val();
  const packrat = $('#packrat').prop('checked');
  const opt_profile = $('#show-profile').prop('checked');
  const opt_trace = $('#show-trace').prop('checked');

  $grammarInfo.html('');
  $grammarValidation.hide();
  $codeInfo.html('');
  $codeValidation.hide();
  codeAst.setValue('');
  codeAstOptimized.setValue('');
  codeProfile.setValue('');

  if (grammarText.length === 0) {
   return;
  }

  const mode = optimizationMode == 'all';

  $('#overlay').css({
    'z-index': '1',
    'display': 'block',
    'background-color': 'rgba(0, 0, 0, 0.1)'
  });
  window.setTimeout(() => {
    const data = JSON.parse(Module.lint(grammarText, codeText, mode, packrat, opt_trace, startRule));
      $('#overlay').css({
        'z-index': '-1',
        'display': 'none',
        'background-color': 'rgba(1, 1, 1, 1.0)'
      });

    if (data.grammar_valid) {
      $grammarValidation.removeClass('validation-invalid').show();

      codeAst.insert(data.ast);
      codeAstOptimized.insert(data.astOptimized);
      if(opt_trace) codeProfile.insert(data.trace);
      else codeProfile.insert(data.profile);

      if (data.source_valid) {
        $codeValidation.removeClass('validation-invalid').show();
      } else {
        $codeValidation.addClass('validation-invalid').show();
      }

      if (data.code.length > 0) {
        const html = generateErrorListHTML(data.code);
        $codeInfo.html(html);
      }
    } else {
      $grammarValidation.addClass('validation-invalid').show();
    }

    if (data.grammar.length > 0) {
      const html = generateErrorListHTML(data.grammar);
      $grammarInfo.html(html);
    }
  }, 0);
}

// Event handing for text editing
let timer;
function setupTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    updateLocalStorage();
    if ($('#auto-refresh').prop('checked')) {
      parse();
    }
  }, 750);
};
grammarEditor.getSession().on('change', setupTimer);
codeEditor.getSession().on('change', setupTimer);

// Event handing in the info area
function makeOnClickInInfo(editor) {
  return function () {
    const el = $(this);
    editor.navigateTo(el.data('ln') - 1, el.data('col') - 1);
    editor.scrollToLine(el.data('ln') - 1, true, false, null);
    editor.focus();

    if(el.data('gln') && el.data('gcol')) {
      grammarEditor.navigateTo(el.data('gln') - 1, el.data('gcol') - 1);
      grammarEditor.scrollToLine(el.data('gln') - 1, true, false, null);
    }
  }
};
$('#grammar-info').on('click', 'li', makeOnClickInInfo(grammarEditor));
$('#code-info').on('click', 'li', makeOnClickInInfo(codeEditor));

// Event handing in the AST optimization
$('#opt-mode').on('change', setupTimer);
$('#start-rule').on('keydown', setupTimer);
$('#packrat').on('change', setupTimer);
$('#auto-refresh').on('change', () => {
  updateLocalStorage();
  $('#parse').prop('disabled', $('#auto-refresh').prop('checked'));
  setupTimer();
});
$('#parse').on('click', parse);

// Resize editors to fit their parents
function resizeEditorsToParent() {
  codeEditor.resize();
  codeEditor.renderer.updateFull();
  codeAst.resize();
  codeAst.renderer.updateFull();
  codeAstOptimized.resize();
  codeAstOptimized.renderer.updateFull();
  codeProfile.resize();
  codeProfile.renderer.updateFull();
}

const ShowProfile = 'show-profile';
const ShowTrace = 'show-trace';

// Show windows
function setupToolWindow(lsKeyName, buttonSel, codeSel) {
  let show = localStorage.getItem(lsKeyName) === 'true';
  $(buttonSel).prop('checked', show);
  $(codeSel).css({ 'display': show ? 'block' : 'none' });

  $(buttonSel).on('change', () => {
    show = $(buttonSel).prop('checked');
    localStorage.setItem(lsKeyName, show);
    $(codeSel).css({ 'display': show ? 'block' : 'none' });
    if(show) {
      switch(lsKeyName) {
        case ShowProfile:
             $('#' + ShowTrace).prop('checked', false);
             localStorage.setItem(ShowTrace, false);
        break;
        case ShowTrace:
             $('#' + ShowProfile).prop('checked', false);
             localStorage.setItem(ShowProfile, false);
        break;
      }
    }
    resizeEditorsToParent();
  });
}
setupToolWindow('show-ast', '#show-ast', '#code-ast');
setupToolWindow('show-ast-optimized', '#show-ast-optimized', '#code-ast-optimized');
setupToolWindow(ShowProfile, '#show-profile', '#code-profile');
setupToolWindow(ShowTrace, '#show-trace', '#code-profile');

// Show page
$('#main').css({
  'display': 'flex',
});

// WebAssembly
var Module = {
  onRuntimeInitialized: function() {
    // Initial parse
    if ($('#auto-refresh').prop('checked')) {
      parse();
    }
  }
};

function doFinalSettings() {
	let select_samples = document.getElementById('opt-samples');
	sampleList.map( (lang, i) => {
           let opt = document.createElement("option");
           opt.value = i; // the index
           opt.innerHTML = lang[0];
           select_samples.append(opt);
        });
}

// vim: sw=2:sts=2
