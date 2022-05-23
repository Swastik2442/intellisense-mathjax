import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const provider1 = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// MathJax Starter
			const mathjaxStarter = new vscode.CompletionItem('mathjax');
			mathjaxStarter.kind = vscode.CompletionItemKind.Keyword;
			mathjaxStarter.insertText = new vscode.SnippetString('$ ${1} $');
			mathjaxStarter.documentation = new vscode.MarkdownString('Insert MathJax Symbols');
			mathjaxStarter.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// Small Integration Symbol
			const intSymbolSmall = new vscode.CompletionItem("TeX Command - Integration 1");
			intSymbolSmall.commitCharacters = ['_'];
			intSymbolSmall.insertText = new vscode.SnippetString('\\int ${0}');
			intSymbolSmall.documentation = new vscode.MarkdownString('Get `Small Integral ∫ Symbol`');

			// Large Integration Symbol
			const intSymbolLarge = new vscode.CompletionItem("TeX Command - Integration 2");
			intSymbolLarge.commitCharacters = ['_'];
			intSymbolLarge.insertText = new vscode.SnippetString('\\displaystyle\\int ${0}');
			intSymbolLarge.documentation = new vscode.MarkdownString('Get `Large Integral ∫ Symbol`');

			// Subscript Elements
			const mathSub = new vscode.CompletionItem("TeX Command - Subscript");
			mathSub.commitCharacters = ['_'];
			mathSub.insertText = new vscode.SnippetString('x_{$0}');
			mathSub.documentation = new vscode.MarkdownString('Get `Subcript Elements`');
			
			// Superscript Elements
			const mathSuper = new vscode.CompletionItem("TeX Command - Superscript");
			mathSuper.commitCharacters = ['_'];
			mathSuper.insertText = new vscode.SnippetString('x^${0}');
			mathSuper.documentation = new vscode.MarkdownString('Get `Supercript Elements`');
			
			// Square Root Symbol
			const sqrRoot = new vscode.CompletionItem("TeX Command - Square Root");
			sqrRoot.commitCharacters = ['_'];
			sqrRoot.insertText = new vscode.SnippetString('\\sqrt{${0}}');
			sqrRoot.documentation = new vscode.MarkdownString('Get `Square Root Symbol` - Root can be modified by adding `[x]` between `sqrt` & `{}`');
			
			// Logarithm Symbol
			const logSymbol = new vscode.CompletionItem("TeX Command - Logarithm Symbol");
			logSymbol.commitCharacters = ['_'];
			logSymbol.insertText = new vscode.SnippetString('\\log_{}${0}');
			logSymbol.documentation = new vscode.MarkdownString('Get `Log Symbol` - Base Value can be set by entering a value inside `{}`');
			
			// Fraction Elements
			const fractionEle = new vscode.CompletionItem("TeX Command - Fraction");
			fractionEle.commitCharacters = ['_'];
			fractionEle.insertText = new vscode.SnippetString('\\frac{${0}}{${1}}');
			fractionEle.documentation = new vscode.MarkdownString('Get `Fraction`');
			
			// Absolute Values Symbols
			const absValue1 = new vscode.CompletionItem("TeX Command - Absolute Value Function 1");
			absValue1.commitCharacters = ['_'];
			absValue1.insertText = new vscode.SnippetString('\\vert{${0}}\\vert');
			absValue1.documentation = new vscode.MarkdownString('Get `Absolute Value Function Symbol |x|`');

			const absValue2 = new vscode.CompletionItem("TeX Command - Absolute Value Function 2");
			absValue2.commitCharacters = ['_'];
			absValue2.insertText = new vscode.SnippetString('\\lfloor{${0}}\rfloor');
			absValue2.documentation = new vscode.MarkdownString('Get `Absolute Value Function Symbol ⌊x⌋`');

			const absValue3 = new vscode.CompletionItem("TeX Command - Absolute Value Function 3");
			absValue3.commitCharacters = ['_'];
			absValue3.insertText = new vscode.SnippetString('\\lceil{${0}}\\rceil');
			absValue3.documentation = new vscode.MarkdownString('Get `Absolute Value Function Symbol ⌈x⌉`');
			
			// Arithmatic Symbols
			const arithSymbol1 = new vscode.CompletionItem("TeX Command - Multiply");
			arithSymbol1.commitCharacters = ['_'];
			arithSymbol1.insertText = new vscode.SnippetString('\\times ');
			arithSymbol1.documentation = new vscode.MarkdownString('Get `Multiply Symbol`');

			const arithSymbol2 = new vscode.CompletionItem("TeX Command - Divide");
			arithSymbol2.commitCharacters = ['_'];
			arithSymbol2.insertText = new vscode.SnippetString('\\div ');
			arithSymbol2.documentation = new vscode.MarkdownString('Get `Division Symbol`');

			const arithSymbol3 = new vscode.CompletionItem("TeX Command - Mutliply Dot");
			arithSymbol3.commitCharacters = ['_'];
			arithSymbol3.insertText = new vscode.SnippetString('\\cdot ');
			arithSymbol3.documentation = new vscode.MarkdownString('Get `Multiplication\'s  Dot Symbol`');
			
			// Trignometric Functions
			const trigSin = new vscode.CompletionItem("TeX Command - Sine");
			trigSin.commitCharacters = ['_'];
			trigSin.insertText = new vscode.SnippetString('\\sin');
			trigSin.documentation = new vscode.MarkdownString('Get `Sin Text`');

			const trigCos = new vscode.CompletionItem("TeX Command - Cosine");
			trigCos.commitCharacters = ['_'];
			trigCos.insertText = new vscode.SnippetString('\\cos');
			trigCos.documentation = new vscode.MarkdownString('Get `Cos Text`');

			const trigTan = new vscode.CompletionItem("TeX Command - Tangent");
			trigTan.commitCharacters = ['_'];
			trigTan.insertText = new vscode.SnippetString('\\tan');
			trigTan.documentation = new vscode.MarkdownString('Get `Tan Text`');

			const trigSec = new vscode.CompletionItem("TeX Command - Secant");
			trigSec.commitCharacters = ['_'];
			trigSec.insertText = new vscode.SnippetString('\\mathrm{sec}');
			trigSec.documentation = new vscode.MarkdownString('Get `Sec Text`');

			const trigCosec = new vscode.CompletionItem("TeX Command - Cosecant");
			trigCosec.commitCharacters = ['_'];
			trigCosec.insertText = new vscode.SnippetString('\\mathrm{cosec}');
			trigCosec.documentation = new vscode.MarkdownString('Get `Cosec Text`');

			const trigCot = new vscode.CompletionItem("TeX Command - Cotangent");
			trigCot.commitCharacters = ['_'];
			trigCot.insertText = new vscode.SnippetString('\\mathrm{cot}');
			trigCot.documentation = new vscode.MarkdownString('Get `Cot Text`');

			// Equation Symbols
			const eqnGrThan = new vscode.CompletionItem("TeX Command - Greater Than");
			eqnGrThan.commitCharacters = ['_'];
			eqnGrThan.insertText = new vscode.SnippetString('\\gt ');
			eqnGrThan.documentation = new vscode.MarkdownString('Get `Greater Than Symbol`');

			const eqnGrThanOrEqual = new vscode.CompletionItem("TeX Command - Greater Than Or Equal To");
			eqnGrThanOrEqual.commitCharacters = ['_'];
			eqnGrThanOrEqual.insertText = new vscode.SnippetString('\\geq ');
			eqnGrThanOrEqual.documentation = new vscode.MarkdownString('Get `Greater Than Or Equal To Symbol`');
			
			const eqnSmThan = new vscode.CompletionItem("TeX Command - Smaller/Lesser Than");
			eqnSmThan.commitCharacters = ['_'];
			eqnSmThan.insertText = new vscode.SnippetString('\\lt ');
			eqnSmThan.documentation = new vscode.MarkdownString('Get `Smaller/Lesser Than Symbol`');

			const eqnSmThanOrEqual = new vscode.CompletionItem("TeX Command - Smaller/Lesser Than Or Equal To");
			eqnSmThanOrEqual.commitCharacters = ['_'];
			eqnSmThanOrEqual.insertText = new vscode.SnippetString('\\leq ');
			eqnSmThanOrEqual.documentation = new vscode.MarkdownString('Get `Smaller/Lesser Than Or Equal To Symbol`');

			const eqnNotEqual = new vscode.CompletionItem("TeX Command - Not Equal");
			eqnNotEqual.commitCharacters = ['_'];
			eqnNotEqual.insertText = new vscode.SnippetString('\\neq ');
			eqnNotEqual.documentation = new vscode.MarkdownString('Get `Not Equal To Symbol`');

			const eqnApprox = new vscode.CompletionItem("TeX Command - Approx");
			eqnApprox.commitCharacters = ['_'];
			eqnApprox.insertText = new vscode.SnippetString('\\approx ');
			eqnApprox.documentation = new vscode.MarkdownString('Get `Approximately Equal To Symbol`');

			// Matrix Elements
			const matrix2Parentheses = new vscode.CompletionItem("TeX Command - Matrix of Order 2x2 (a)");
			matrix2Parentheses.commitCharacters = ['_'];
			matrix2Parentheses.insertText = new vscode.SnippetString('$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$');
			matrix2Parentheses.documentation = new vscode.MarkdownString('Get `Matrix Element of Order 2x2` (with Parentheses)');

			const matrix2Brackets = new vscode.CompletionItem("TeX Command - Matrix of Order 2x2 (b)");
			matrix2Brackets.commitCharacters = ['_'];
			matrix2Brackets.insertText = new vscode.SnippetString('$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$');
			matrix2Brackets.documentation = new vscode.MarkdownString('Get `Matrix Element of Order 2x2` (with Brackets)');

			const matrix2Determinant = new vscode.CompletionItem("TeX Command - Matrix Determinant of Order 2x2");
			matrix2Determinant.commitCharacters = ['_'];
			matrix2Determinant.insertText = new vscode.SnippetString('$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}$');
			matrix2Determinant.documentation = new vscode.MarkdownString('Get `Matrix Determinant Element of Order 2x2`');

			const matrix3Parentheses = new vscode.CompletionItem("TeX Command - Matrix of Order 3x3 (a)");
			matrix3Parentheses.commitCharacters = ['_'];
			matrix3Parentheses.insertText = new vscode.SnippetString('$\\begin{pmatrix} a & b & c \\\\ d & e & f \\end{pmatrix}$');
			matrix3Parentheses.documentation = new vscode.MarkdownString('Get `Matrix Element of Order 3x3` (with Parentheses)');

			const matrix3Brackets = new vscode.CompletionItem("TeX Command - Matrix of Order 3x3 (b)");
			matrix3Brackets.commitCharacters = ['_'];
			matrix3Brackets.insertText = new vscode.SnippetString('$\\begin{bmatrix} a & b & c \\\\ d & e & f \\end{bmatrix}$');
			matrix3Brackets.documentation = new vscode.MarkdownString('Get `Matrix Element of Order 3x3` (with Brackets)');

			const matrix3Determinant = new vscode.CompletionItem("TeX Command - Matrix Determinant of Order 3x3");
			matrix3Determinant.commitCharacters = ['_'];
			matrix3Determinant.insertText = new vscode.SnippetString('$\\begin{vmatrix} a & b & c \\\\ d & e & f \\end{vmatrix}$');
			matrix3Determinant.documentation = new vscode.MarkdownString('Get `Matrix Determinant Element of Order 3x3`');

			// Relations Symbols
			const relSet = new vscode.CompletionItem("TeX Command - 'is a Set of' Symbol");
			relSet.commitCharacters = ['_'];
			relSet.insertText = new vscode.SnippetString('\\in ');
			relSet.documentation = new vscode.MarkdownString('Get `Set` Symbol');

			const relRevSet = new vscode.CompletionItem("TeX Command - 'is a Reverse Set of' Symbol");
			relRevSet.commitCharacters = ['_'];
			relRevSet.insertText = new vscode.SnippetString('\\ni ');
			relRevSet.documentation = new vscode.MarkdownString('Get `Reverse Set` Symbol');

			const relNotSet = new vscode.CompletionItem("TeX Command - 'is Not a Set of' Symbol");
			relNotSet.commitCharacters = ['_'];
			relNotSet.insertText = new vscode.SnippetString('\\in ');
			relNotSet.documentation = new vscode.MarkdownString('Get `Not a Set` Symbol');

			const relSubset = new vscode.CompletionItem("TeX Command - 'is a Subset of' Symbol");
			relSubset.commitCharacters = ['_'];
			relSubset.insertText = new vscode.SnippetString('\\in ');
			relSubset.documentation = new vscode.MarkdownString('Get `Subset` Symbol');

			const relEqSubset = new vscode.CompletionItem("TeX Command - 'is a Subset of or Equal To' Symbol");
			relEqSubset.commitCharacters = ['_'];
			relEqSubset.insertText = new vscode.SnippetString('\\in ');
			relEqSubset.documentation = new vscode.MarkdownString('Get `Subset or Equal to` Symbol');

			const relNotSubset = new vscode.CompletionItem("TeX Command - 'is Not a Subset of' Symbol");
			relNotSubset.commitCharacters = ['_'];
			relNotSubset.insertText = new vscode.SnippetString('\\in ');
			relNotSubset.documentation = new vscode.MarkdownString('Get `Not Subset` Symbol');

			const relIntersection = new vscode.CompletionItem("TeX Command - 'Intersection' Symbol");
			relIntersection.commitCharacters = ['_'];
			relIntersection.insertText = new vscode.SnippetString('\\cap ');
			relIntersection.documentation = new vscode.MarkdownString('Get `Intersection` Symbol');

			const relUnion = new vscode.CompletionItem("TeX Command - 'Union' Symbol");
			relUnion.commitCharacters = ['_'];
			relUnion.insertText = new vscode.SnippetString('\\cup ');
			relUnion.documentation = new vscode.MarkdownString('Get `Union` Symbol');

			// Special Symbols
			const overLine = new vscode.CompletionItem("TeX Command - 'Overline' Symbol");
			overLine.commitCharacters = ['_'];
			overLine.insertText = new vscode.SnippetString('\\overline{${0}} ');
			overLine.documentation = new vscode.MarkdownString('Get `line` Symbol');

			const plusMinus = new vscode.CompletionItem("TeX Command - 'Plus Minus' Symbol");
			plusMinus.commitCharacters = ['_'];
			plusMinus.insertText = new vscode.SnippetString('\\pm ');
			plusMinus.documentation = new vscode.MarkdownString('Get `±` Symbol');

			const special01 = new vscode.CompletionItem("TeX Command - 'max(a,b)' Equation");
			special01.commitCharacters = ['_'];
			special01.insertText = new vscode.SnippetString('$\\max(a,b)=\\begin{cases}a&(a\\geqq b)\\\\b&(a\\lt b)\\end{cases}$ ');
			special01.documentation = new vscode.MarkdownString('Get `max(a,b)` Equation');

			const omegaBig = new vscode.CompletionItem("TeX Command - 'Big Omega' Symbol");
			omegaBig.commitCharacters = ['_'];
			omegaBig.insertText = new vscode.SnippetString('\\Omega ');
			omegaBig.documentation = new vscode.MarkdownString('Get `Ω` Symbol');

			const omegaSmall = new vscode.CompletionItem("TeX Command - 'Small Omega' Symbol");
			omegaSmall.commitCharacters = ['_'];
			omegaSmall.insertText = new vscode.SnippetString('\\omega ');
			omegaSmall.documentation = new vscode.MarkdownString('Get `ω` Symbol');

			const micronBig = new vscode.CompletionItem("TeX Command - 'Big Omega' Symbol");
			micronBig.commitCharacters = ['_'];
			micronBig.insertText = new vscode.SnippetString('\\mathcal{O} ');
			micronBig.documentation = new vscode.MarkdownString('Get `O` Symbol');

			const micronSmall = new vscode.CompletionItem("TeX Command - 'Small Omega' Symbol");
			micronSmall.commitCharacters = ['_'];
			micronSmall.insertText = new vscode.SnippetString('o ');
			micronSmall.documentation = new vscode.MarkdownString('Get `o` Symbol');

			const thetaBig = new vscode.CompletionItem("TeX Command - 'Big Theta' Symbol");
			thetaBig.commitCharacters = ['_'];
			thetaBig.insertText = new vscode.SnippetString('\\Theta ');
			thetaBig.documentation = new vscode.MarkdownString('Get `Θ` Symbol');

			return [
				mathjaxStarter,
				intSymbolSmall,
				intSymbolLarge,
				mathSub,
				mathSuper,
				sqrRoot,
				logSymbol,
				fractionEle,
				absValue1,
				absValue2,
				absValue3,
				arithSymbol1,
				arithSymbol2,
				arithSymbol3,
				trigSin,
				trigCos,
				trigTan,
				trigSec,
				trigCosec,
				trigCot,
				eqnApprox,
				eqnGrThan,
				eqnGrThanOrEqual,
				eqnNotEqual,
				eqnSmThan,
				eqnSmThanOrEqual,
				matrix2Brackets,
				matrix2Determinant,
				matrix2Parentheses,
				matrix3Brackets,
				matrix3Determinant,
				matrix3Parentheses,
				relSet,
				relRevSet,
				relNotSet,
				relSubset,
				relNotSubset,
				relEqSubset,
				relIntersection,
				relUnion,
				overLine,
				plusMinus,
				special01,
				omegaBig,
				omegaSmall,
				micronBig,
				micronSmall,
				thetaBig
			];
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('int_')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('{}', vscode.CompletionItemKind.Method)
				];
			}
		},
		'.'
	);

	context.subscriptions.push(provider1, provider2);
}
